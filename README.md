<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>MLGifier 420</title>
<style>
    body { font-family: Comic Sans MS, cursive; background: black; color: lime; text-align: center; padding: 20px; }
    textarea { width: 80%; height: 100px; font-size: 1.2em; }
    button { padding: 10px 20px; font-size: 1.2em; background: red; color: white; border: none; cursor: pointer; }
    #output { margin-top: 20px; font-size: 1.5em; }
</style>
</head>
<body>

<h1>🔥 MLG Sentence Generator 🔥</h1>
<p>Type a normal sentence below and click "MLGify" for instant DANKNESS.</p>

<textarea id="inputText" placeholder="Type your boring sentence here..."></textarea><br><br>
<button onclick="mlgify()">MLGify</button>

<div id="output"></div>

<script>
const replacements = {
    "hello": ["YO WHAT UP M8", "SUP BRO"],
    "hi": ["YO", "AYY"],
    "shot": ["360 NOSCOPE", "HEADSHOT"],
    "hit": ["QUICKSCOPED", "MLG BLASTED"],
    "kill": ["REKT", "SHREKT"],
    "good": ["EPIC", "DANK"],
    "bad": ["NOOB", "SCRUB"],
    "win": ["EZ GG", "PWNED THEM"],
    "lost": ["GOT REKT", "FAILBOAT"],
    "eat": ["INHALE DORITOS", "CHUG MOUNTAIN DEW"],
    "drink": ["CHUG MOUNTAIN DEW", "SLAM MONSTER ENERGY"],
    "run": ["BLAST AT 420MPH", "ZOOM LIKE SANIC"],
    "fast": ["LIKE SONIC", "420 BLAZE SPEED"],
    "slow": ["LIKE A SNAIL", "TOO NOOB TO MOVE"]
};

const hypeWords = [
    "420 BLAZE IT", "MLG PRO", "GET REKT", "NOSCOPED", "ILLUMINATI CONFIRMED",
    "MOUNTAIN DEW", "DORITOS", "AIRHORN.mp3", "🔥🔥🔥", "💯💯💯", "SWAG",
    "OP AF", "PWNED", "YOLO", "GG EZ"
];

function mlgify() {
    let text = document.getElementById("inputText").value;
    let words = text.split(/\s+/);

    let swagWords = words.map(word => {
        let lower = word.toLowerCase();
        if (replacements[lower]) {
            let opts = replacements[lower];
            return opts[Math.floor(Math.random() * opts.length)];
        }
        return word;
    });

    // Randomly insert hype words
    for (let i = 0; i < swagWords.length; i++) {
        if (Math.random() < 0.3) { // 30% chance
            swagWords.splice(i, 0, hypeWords[Math.floor(Math.random() * hypeWords.length)]);
            i++;
        }
    }

    // Add caps lock chaos
    let result = swagWords.join(" ").toUpperCase();
    document.getElementById("output").innerText = result;
}
</script>

</body>
</html>
