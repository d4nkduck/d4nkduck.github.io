<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>MLGizer 4.0</title>
<style>
:root {
  --bg: #0b0b0b;
  --panel: #121820;
  --accent: #00ff99;
  --muted: #a0a8b0;
}
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: var(--bg);
  color: #fff;
}
.wrap {
  max-width: 900px;
  margin: auto;
  padding: 16px;
}
h1 {
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 4px;
}
p {
  margin-top: 0;
  color: var(--muted);
}
.card {
  background: var(--panel);
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 12px;
}
textarea {
  width: 100%;
  min-height: 100px;
  font-size: 1rem;
  border-radius: 8px;
  padding: 8px;
  background: #1a1f27;
  border: none;
  color: #fff;
  resize: vertical;
}
button {
  padding: 10px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.btn-primary {
  background: var(--accent);
  color: #000;
  font-weight: bold;
}
.btn-secondary {
  background: #1f2933;
  color: var(--muted);
}
.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}
#output {
  white-space: pre-wrap;
  background: #1a1f27;
  padding: 12px;
  border-radius: 8px;
  min-height: 80px;
  font-size: 1.1rem;
}
label {
  color: var(--muted);
  font-size: 0.9rem;
}
</style>
</head>
<body>
<div class="wrap">
  <h1>⚡ MLGizer 4.0 ⚡</h1>
  <p>Turn boring sentences into gamer-grade, meme-fueled chaos — with smart caps & phrasing.</p>

  <div class="card">
    <textarea id="inputText" placeholder="Type your sentence..."></textarea>
    <div class="controls">
      <label>Intensity <input id="intensity" type="range" min="0" max="100" value="60" /></label>
      <label><input type="checkbox" id="fullMeme" /> Full Meme Mode</label>
      <label><input type="checkbox" id="emoji" checked /> Emoji</label>
    </div>
    <div class="controls">
      <button class="btn-primary" id="mlgifyBtn">MLGify</button>
      <button class="btn-secondary" id="clearBtn">Clear</button>
      <button class="btn-secondary" id="exampleBtn">Example</button>
    </div>
  </div>

  <div class="card">
    <div id="output">Your dankified sentence will appear here.</div>
    <div class="controls">
      <button class="btn-secondary" id="copyBtn">Copy</button>
    </div>
  </div>
</div>

<script>
const phraseReplacements = [
  [/hit a trickshot/i, ["pulled a 360 noscope", "landed a montage clip"]],
  [/won the game/i, ["clutched the dub", "secured the W"]],
  [/lost the game/i, ["got farmed for free elo", "fed hard"]],
];

const wordReplacements = {
  verbs: {
    hit: ["slapped", "360-noscope'd", "deleted"],
    shoot: ["lasered", "quickscoped", "bodied"],
    win: ["clutched", "outplayed", "smurfed on"],
    lose: ["got dumpstered", "got farmed", "fed"],
    run: ["speedran", "zoomed", "outran the meta"],
    kill: ["fragged", "obliterated", "rekt"],
    destroy: ["nuked", "annihilated", "demolished"],
  },
  nouns: {
    enemy: ["bot", "npc", "camper"],
    head: ["dome", "noggin", "brainbox"],
    game: ["match", "scrim", "ranked lobby"],
    shot: ["headshot", "quickscope", "flick"],
    kill: ["frag", "wipe", "full send"],
    team: ["squad", "stack", "crew"],
    sniper: ["sniper rig", "glass cannon"],
  },
  adjectives: {
    good: ["cracked", "broken", "godlike"],
    bad: ["trash", "bot-tier", "laggy"],
    fast: ["lightspeed", "frame-perfect", "sonic-tier"],
    slow: ["potato-speed", "lagfest", "sluggish"],
  }
};

const hypeWords = [
  "💯","🔥","POG","EZ","CLUTCH","GODLIKE",
  "DORITO BOOST","MOUNTAIN DEW RUSH","AIRHORN","GG EZ"
];

function randomChoice(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function matchCase(orig, repl) {
  if (orig.toUpperCase() === orig) return repl.toUpperCase();
  if (orig.toLowerCase() === orig) return repl.toLowerCase();
  if (orig[0] === orig[0].toUpperCase()) {
    return repl[0].toUpperCase() + repl.slice(1).toLowerCase();
  }
  return repl;
}

function tokenize(text) {
  return text.match(/(\w+|\s+|[^\w\s])/g) || [];
}

function normalizeWord(w) {
  return w.toLowerCase();
}

function mlgifyText(text, opts) {
  let out = text;

  // Phrase replacements first
  phraseReplacements.forEach(([regex, repls]) => {
    if (regex.test(out) && Math.random() < opts.intensity/100) {
      out = out.replace(regex, matchCase(out.match(regex)[0], randomChoice(repls)));
    }
  });

  // Tokenize
  let tokens = tokenize(out);
  let result = [];
  tokens.forEach(token => {
    if (/^\w+$/.test(token)) {
      let norm = normalizeWord(token);
      let repl = null;
      if (wordReplacements.verbs[norm]) repl = randomChoice(wordReplacements.verbs[norm]);
      else if (wordReplacements.nouns[norm]) repl = randomChoice(wordReplacements.nouns[norm]);
      else if (wordReplacements.adjectives[norm]) repl = randomChoice(wordReplacements.adjectives[norm]);

      if (repl && Math.random() < opts.intensity/100) {
        token = matchCase(token, repl);
      }
      result.push(token);
      if (Math.random() < opts.intensity/250) {
        if (opts.fullMeme) result.push(randomChoice(hypeWords));
        else if (opts.emoji && Math.random() < 0.5) result.push(randomChoice(hypeWords.filter(x=>/[\u2190-\u2BFF\u{1F300}-\u{1FAFF}]/u.test(x))));
      }
    } else {
      result.push(token);
    }
  });

  return result.join("");
}

document.getElementById("mlgifyBtn").addEventListener("click", () => {
  const opts = {
    intensity: parseInt(document.getElementById("intensity").value),
    fullMeme: document.getElementById("fullMeme").checked,
    emoji: document.getElementById("emoji").checked
  };
  const input = document.getElementById("inputText").value;
  document.getElementById("output").textContent = input ? mlgifyText(input, opts) : "Type something first.";
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("inputText").value = "";
  document.getElementById("output").textContent = "Your dankified sentence will appear here.";
});

document.getElementById("exampleBtn").addEventListener("click", () => {
  const examples = [
    "I hit a trickshot earlier and felt amazing.",
    "We won the game after a long comeback.",
    "He tried to camp the spawn and failed.",
    "I saw a sniper on the roof and took him out."
  ];
  document.getElementById("inputText").value = randomChoice(examples);
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("output").textContent;
  navigator.clipboard.writeText(text).catch(()=>{});
});
</script>
</body>
</html>
