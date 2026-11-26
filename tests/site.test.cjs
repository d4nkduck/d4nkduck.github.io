// Integration smoke tests: load the exact scripts referenced by the page and run its
// translation function against small DOM doubles. This is not a full browser test.
const assert = require("node:assert/strict");
const { readFileSync, existsSync } = require("node:fs");
const { resolve } = require("node:path");
const vm = require("node:vm");
const root = resolve(__dirname, "..");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const window = {};
const context = vm.createContext({ window });
const scripts = [...html.matchAll(/<script src="([^"?]+)(?:\?v=([^"]+))?"><\/script>/g)];
assert.ok(scripts.length >= 3);
for (const [,path] of scripts) {
  assert.ok(existsSync(resolve(root,path)), path);
  vm.runInContext(readFileSync(resolve(root,path),"utf8"),context,{filename:path});
}
const packs = window.languagePacks;
assert.equal(new Set(packs.map(p=>p.id)).size,packs.length);
for (const p of packs) {
  const script = scripts.find(s=>s[1]==="languages/"+p.id+".js");
  assert.ok(script,p.id);
  assert.ok(script[2]===p.version || script[2]?.startsWith(p.version+"-"),p.id+" cache identifier");
}
const app = html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
new vm.Script(app,{filename:"index.html inline script"});
const translateSource = app.split("\n").find(line=>line.startsWith("function translate()"));
assert.ok(translateSource,"translation function must be available");
const norm = s=>s.normalize("NFC").toLowerCase().trim();
function translate(id,source,reverse=false,register="everyday"){
  const pack=packs.find(p=>p.id===id);
  assert.ok(pack,id);
  pack.register=register;
  const fields={source:{value:source},result:{textContent:""},status:{textContent:""}};
  const run = new Function("pack","reverse","window","$","norm",translateSource+"\ntranslate();");
  run(pack,reverse,window,id=>fields[id],norm);
  return [fields.result.textContent,fields.status.textContent];
}
for (const [id,expected] of [
  ["rasnovian","Þu nu ikta kæn help li?"],
  ["javenoerl","Est vu kan hilfé me?"]
]) {
  const [out,status]=translate(id,"Can you give me a hand?");
  assert.equal(out,expected);
  assert.ok(status.includes("Paraphrased: Can you help me?"));
  assert.equal(translate(id,out,true)[0],"Can you help me?");
}
assert.equal(translate("javenoerl","The task is complete.",false,"work")[0],"Stat tásk férti.");
assert.equal(translate("javenoerl","The task is complete.")[0],"Le tásk es férti.");
assert.equal(translate("javenoerl","You are kind.",false,"personal")[0],"Tei es gentil.");
assert.equal(translate("rasnovian","I see the house.")[0],"Ik nu husuta se.");
assert.ok(translate("javenoerl","I like the glorb.")[0].includes("[glorb]"));
assert.equal(translate("rasnovian","")[0],"");
console.log("Site translation integration checks passed.");
