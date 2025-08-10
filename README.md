<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>MLGizer 3.0 — Smart Dankifier</title>
<style>
  :root{
    --bg:#0b0b0b; --panel:#0f1720; --accent:#00d084; --muted:#98a0a6; --glass: rgba(255,255,255,0.03);
  }
  html,body{height:100%;margin:0;font-family:Inter,-apple-system,system-ui,"Segoe UI",Roboto,Arial,sans-serif;background:linear-gradient(180deg,#040404 0%, #0b0b0b 100%);color:#e6eef1}
  .wrap{max-width:960px;margin:18px auto;padding:18px}
  header{display:flex;gap:12px;align-items:center;justify-content:space-between}
  h1{font-size:1.25rem;margin:0;color:var(--accent)}
  p.lead{margin:6px 0 0;color:var(--muted);font-size:0.95rem}
  main{display:grid;grid-template-columns:1fr;gap:12px;margin-top:14px}
  .card{background:var(--panel);border-radius:12px;padding:12px;box-shadow:0 6px 20px rgba(0,0,0,0.6);border:1px solid var(--glass)}
  textarea#input{width:100%;min-height:110px;padding:12px;border-radius:8px;background:#061218;border:none;color:#eaf6ee;font-size:1rem;resize:vertical}
  #controls{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:8px}
  label{font-size:0.9rem;color:var(--muted)}
  .row{display:flex;gap:8px;align-items:center}
  .btn{background:var(--accent);color:#04201a;border:none;padding:10px 12px;border-radius:10px;font-weight:600;cursor:pointer}
  .btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted)}
  #output{min-height:80px;padding:12px;border-radius:8px;background:#021018;color:#dfffe9;font-size:1.05rem;white-space:pre-wrap}
  .small{font-size:0.85rem;color:var(--muted)}
  .flex{display:flex;gap:10px;align-items:center}
  input[type="range"]{accent-color:var(--accent);width:160px}
  footer{margin-top:12px;color:var(--muted);font-size:0.85rem;text-align:center}
  .tog{display:inline-flex;align-items:center;gap:8px;background:transparent;padding:6px;border-radius:8px}
  @media(min-width:760px){ main{grid-template-columns:1fr 1fr} }
</style>
</head>
<body>
<div class="wrap">
  <header>
    <div>
      <h1>MLGizer 3.0</h1>
      <p class="lead">Modern, less-corny dankifier — preserves capitalization patterns. Slide the intensity and press MLGify.</p>
    </div>
    <div class="small">v3.0 — Mobile friendly</div>
  </header>

  <main>
    <!-- INPUT CARD -->
    <section class="card" aria-labelledby="inlabel">
      <div id="inlabel" class="small">Input (type a sentence)</div>
      <textarea id="input" placeholder="I hit a trickshot earlier..."></textarea>

      <div id="controls">
        <div class="row">
          <label for="intensity" class="small">Intensity</label>
          <input id="intensity" type="range" min="0" max="100" value="50" />
        </div>

        <div class="row">
          <label class="tog small"><input id="fullMeme" type="checkbox" /> Full Meme Mode</label>
          <label class="tog small"><input id="emoji" type="checkbox" checked /> Emoji</label>
        </div>

        <div class="flex" style="margin-left:auto">
          <button class="btn" id="go">MLGify</button>
          <button class="btn ghost" id="clear">Clear</button>
        </div>
      </div>

      <div style="margin-top:10px" class="small">Tip: Keep proper punctuation — MLGizer preserves punctuation & capitalization shape.</div>
    </section>

    <!-- OUTPUT CARD -->
    <section class="card" aria-labelledby="outlabel">
      <div id="outlabel" class="small">Output</div>
      <div id="output" aria-live="polite" role="status">Your dankified sentence will appear here.</div>

      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
        <button class="btn" id="copy">Copy</button>
        <button class="btn ghost" id="download">Download .txt</button>
        <button class="btn ghost" id="examples">Random example</button>
        <div style="margin-left:auto" class="small" id="status"></div>
      </div>
    </section>
  </main>

  <footer class="small">Designed for fast mobile usage. No network calls — runs fully in your browser.</footer>
</div>

<script>
/* -------------------------
   SMART REPLACEMENTS DATA
   ------------------------- */
const lexicon = {
  verbs: {
    // base : [options]
    "hit": ["nailed", "360-noscope", "clapped", "quickscoped"],
    "shoot": ["quickscoped", "lasered", "bodied"],
    "win": ["clutched", "outplayed", "carried"],
    "lose": ["got wiped", "faceplanted", "got farmed"],
    "run": ["speedran", "zoomed", "dash-rifted"],
    "kill": ["deleted", "obliterated", "pwned"],
    "destroy": ["nuked", "deconstructed", "annihilated"],
    "play": ["scrimmed", "fragged", "farmed"],
    "see": ["peeped", "spotted", "scoped"],
    "think": ["brain-queued", "meta-read"],
  },
  nouns: {
    "trickshot": ["trickshot", "highlight", "no-scope montage"],
    "enemy": ["bot", "camper", "smurf"],
    "head": ["dome", "noggin", "brainbox"],
    "game": ["match", "scrim", "ranked lobby"],
    "shot": ["headshot", "360", "quickscope"],
    "kill": ["frag", "cleanse", "ez kill"],
    "team": ["squad", "stack", "crew"],
    "sniper": ["sniper rig", "glass cannon"],
    "weapon": ["boombox", "boomstick", "blaster"]
  },
  adjectives: {
    "good": ["cracked", "broken", "godlike"],
    "bad": ["trash", "free elo", "bot-tier"],
    "fast": ["lightspeed", "frames-perfect", "sonic-tier"],
    "slow": ["laggy", "potato-speed", "stuttery"]
  },
  extras: [
    "💯","🔥","POG","EZ","CLUTCH","GODLIKE","DORITO BOOST","MOUNTAIN DEW RUSH",
    "ILLUMINATI CONFIRMED","AIRHORN","HIGHLIGHT REEL"
  ]
};

/* -------------------------
   UTIL: TOKENIZE (keeps punctuation)
   matches sequences of letters/numbers (words) or any other single char (punctuation/space)
   ------------------------- */
function tokenize(text){
  // split into words and non-word tokens. Keep spaces as separate tokens to preserve shape.
  // We'll use a regex that captures words (\w+) and everything else as single characters.
  const re = /(\w+)|(\s+)|([^\s\w])/g;
  let tokens = [];
  let m;
  while((m = re.exec(text)) !== null){
    tokens.push(m[0]);
  }
  return tokens;
}

/* -------------------------
   UTIL: simple normalize for lookup
   - lower case, strip common suffixes for naive morphological matching
   ------------------------- */
function normalizeWord(w){
  let base = w.toLowerCase();
  // simple suffix strip (ing, ed, s) - keep it conservative
  if(base.endsWith("ing") && base.length>4) base = base.slice(0,-3);
  else if(base.endsWith("ed") && base.length>3) base = base.slice(0,-2);
  else if(base.endsWith("s") && base.length>3) base = base.slice(0,-1);
  return base;
}

/* -------------------------
   UTIL: Match capitalization shape of original to replacement
   - if original is ALL CAPS => replacement ALL CAPS
   - if original is all lower => all lower
   - if original is Capitalized (First upper, rest lower) => Capitalize replacement
   - else: apply per-character mapping: for each char in replacement,
     if corresponding char in original exists and is upper => upper, else lower.
   ------------------------- */
function matchCase(orig, repl){
  if(!orig || !repl) return repl;
  // check for simple categories
  const isAllUpper = orig === orig.toUpperCase();
  const isAllLower = orig === orig.toLowerCase();
  const isCapitalized = orig[0] === orig[0].toUpperCase() && orig.slice(1) === orig.slice(1).toLowerCase();

  if(isAllUpper) return repl.toUpperCase();
  if(isAllLower) return repl.toLowerCase();
  if(isCapitalized) return repl[0].toUpperCase() + repl.slice(1).toLowerCase();

  // per-char mapping
  let res = "";
  for(let i=0;i<repl.length;i++){
    const char = repl[i];
    const origChar = orig[i] || "";
    if(origChar && origChar === origChar.toUpperCase() && /[A-Z]/i.test(origChar)){
      res += char.toUpperCase();
    } else {
      res += char.toLowerCase();
    }
  }
  return res;
}

/* -------------------------
   Choose replacement for a token based on normalized base
   Uses lexicon, intensity, and randomness
   ------------------------- */
function chooseReplacement(base, token, intensity){
  // intensity: 0-100
  const roll = Math.random()*100;
  // bias for higher intensity to pick replacement more often
  const threshold = Math.max(20, intensity * 0.7); // lowest 20% chance even at 0
  if(roll > threshold) return null; // keep original

  // try verbs
  if(lexicon.verbs[base]) return randomChoice(lexicon.verbs[base]);
  if(lexicon.nouns[base]) return randomChoice(lexicon.nouns[base]);
  if(lexicon.adjectives && lexicon.adjectives[base]) return randomChoice(lexicon.adjectives[base]);

  // fallback: sometimes insert a short meme-y suffix or prefix
  if(Math.random() < 0.12) {
    return randomChoice(["EZ", "POG", "CLUTCH", "GODLIKE"]);
  }

  return null;
}
function randomChoice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

/* -------------------------
   Simple WebAudio hitmarker for tactile feedback (lightweight)
   ------------------------- */
function playHit(){
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "square";
    o.frequency.value = 1200;
    g.gain.value = 0.0006;
    o.connect(g); g.connect(ctx.destination);
    o.start();
    // quick pitch slide for 'tick'
    const now = ctx.currentTime;
    o.frequency.setValueAtTime(1200, now);
    o.frequency.exponentialRampToValueAtTime(800, now + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0000001, now + 0.08);
    o.stop(now + 0.09);
  }catch(e){
    // ignore if audio blocked
  }
}

/* -------------------------
   MAIN: mlgifyText
   ------------------------- */
function mlgifyText(inputText, opts){
  const tokens = tokenize(inputText);
  const intensity = opts.intensity;
  const fullMeme = opts.fullMeme;
  const useEmoji = opts.emoji;

  // build result tokens
  let outTokens = [];
  for(let i=0;i<tokens.length;i++){
    const tk = tokens[i];
    // only process "words" (letters/digits), leave spaces/punct alone
    if(/^\w+$/.test(tk)){
      const norm = normalizeWord(tk);
      const repl = chooseReplacement(norm, tk, intensity);
      if(repl){
        // if original was a word with suffix we removed (ing/ed/s), try re-attach simple suffix if natural
        let final = repl;
        // if original had 'ing' and repl is single word, maybe add -ing variant occasionally
        if(tk.toLowerCase().endsWith("ing") && Math.random() < 0.25){
          if(!final.endsWith("ing")) final = final + "ing";
        } else if(tk.toLowerCase().endsWith("s") && Math.random() < 0.15){
          if(!final.endsWith("s")) final = final + "s";
        }
        // apply case shape
        final = matchCase(tk, final);
        outTokens.push(final);
      } else {
        outTokens.push(tk);
      }
      // maybe insert hype words after some tokens at higher intensity
      if(Math.random() < (intensity/200)){
        if(fullMeme){
          outTokens.push("🔊");
        } else if(useEmoji && Math.random() < 0.35){
          outTokens.push(randomChoice(lexicon.extras));
        }
      }
    } else {
      // keep punctuation/space as-is
      outTokens.push(tk);
    }
  }

  // Add subtle final flourish depending on intensity
  let result = outTokens.join("");
  if(fullMeme && intensity > 60){
    // sprinkle in a bracketed meme tag at end
    result = result.trim();
    if(Math.random() < 0.6){
      result += "  — [MLG PRO | " + randomChoice(["DORITOS", "MOUNTAIN DEW", "AIRHORN"]) + "]";
    }
  } else if(intensity > 75 && useEmoji){
    result += " " + randomChoice(["💯","🔥","POG"]);
  }

  // lightweight post-cleanup: fix multiple spaces
  result = result.replace(/\s{2,}/g," ");
  return result;
}

/* -------------------------
   UI wiring
   ------------------------- */
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const goBtn = document.getElementById("go");
const copyBtn = document.getElementById("copy");
const clearBtn = document.getElementById("clear");
const intensityEl = document.getElementById("intensity");
const fullMemeEl = document.getElementById("fullMeme");
const emojiEl = document.getElementById("emoji");
const statusEl = document.getElementById("status");
const downloadBtn = document.getElementById("download");
const examplesBtn = document.getElementById("examples");

function render(){
  const opts = {
    intensity: parseInt(intensityEl.value,10),
    fullMeme: fullMemeEl.checked,
    emoji: emojiEl.checked
  };
  const inText = inputEl.value.trim();
  if(!inText){
    outputEl.textContent = "Your dankified sentence will appear here.";
    statusEl.textContent = "";
    return;
  }
  const out = mlgifyText(inText, opts);
  outputEl.textContent = out;
  statusEl.textContent = "Intensity " + opts.intensity;
}

// click handler: do quick feedback and render
goBtn.addEventListener("click", ()=>{
  render();
  playHit();
  // tiny visual flourish
  goBtn.animate([{ transform: "scale(1)" }, { transform: "scale(0.96)" }, { transform: "scale(1)" }], { duration: 180 });
});

// live update as user tweaks intensity (instant preview)
[intensityEl, fullMemeEl, emojiEl].forEach(el => el.addEventListener("input", render));
inputEl.addEventListener("input", ()=>{ statusEl.textContent = "typing…"; setTimeout(()=>render(), 120); });

// copy
copyBtn.addEventListener("click", async ()=>{
  const txt = outputEl.textContent;
  try{
    await navigator.clipboard.writeText(txt);
    statusEl.textContent = "Copied ✓";
  }catch(e){
    // fallback
    const ta = document.createElement("textarea");
    ta.value = txt; document.body.appendChild(ta);
    ta.select();
    try{ document.execCommand("copy"); statusEl.textContent = "Copied ✓"; }catch(e){ statusEl.textContent = "Copy failed"; }
    ta.remove();
  }
});

// clear
clearBtn.addEventListener("click", ()=>{
  inputEl.value = "";
  outputEl.textContent = "Your dankified sentence will appear here.";
  statusEl.textContent = "Cleared";
});

// download
downloadBtn.addEventListener("click", ()=>{
  const content = outputEl.textContent || "";
  const blob = new Blob([content], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "mlgified.txt"; document.body.appendChild(a); a.click();
  a.remove(); URL.revokeObjectURL(url);
  statusEl.textContent = "Downloaded";
});

// examples
const examples = [
  "I hit a trickshot earlier and felt amazing.",
  "We won the game after a long comeback.",
  "He tried to camp the spawn and failed.",
  "I saw a sniper on the roof and took him out."
];
examplesBtn.addEventListener("click", ()=>{
  inputEl.value = randomChoice(examples);
  render();
  playHit();
});

// initial render
render();

</script>
</body>
</html>
