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
const scripts = [...html.matchAll(/<script src="([^"?]+)(?:\?v=([^"]+))?"><\/script>/g)].filter(s=>s[1].startsWith("languages/"));
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
const app = readFileSync(resolve(root,"assets/app.js"),"utf8");
assert.ok(html.includes('src="assets/app.js?v=1"'));
assert.ok(html.includes('href="assets/styles.css?v=1"'));
assert.ok(existsSync(resolve(root,"assets/styles.css")));
assert.ok(existsSync(resolve(root,"assets/atlas.svg")));
new vm.Script(app,{filename:"assets/app.js"});
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

class Element {
  constructor(tag="div"){this.tag=tag;this.children=[];this.dataset={};this.attributes={};this.style={};this.value="";this.textContent="";this.hidden=false;this.disabled=false;this.events={};this.classList={add(){},toggle(){}};}
  append(...children){this.children.push(...children);if(this.tag==="select"&&!this.value&&children[0])this.value=children[0].value;}
  replaceChildren(...children){this.children=[];this.value="";this.append(...children);}
  addEventListener(name,fn){this.events[name]=fn;}
  setAttribute(k,v){this.attributes[k]=v;}
  removeAttribute(k){delete this.attributes[k];}
  querySelectorAll(){return this.children;}
  focus(){}
  scrollIntoView(){}
}
const tags=new Map([...html.matchAll(/<([a-z][\w-]*)\b([^>]*\bid="([^"]+)"[^>]*)>/g)].map(([,tag,attrs,id])=>{const e=new Element(tag);e.id=id;e.hidden=/\bhidden\b/.test(attrs);return [id,e];}));
const element=id=>{assert.ok(tags.has(id),"Missing element "+id);return tags.get(id);};
const views=["translate","dictionary","learn","docs"];
for(const view of views){const e=new Element("button");e.dataset.view=view;element("nav").append(e);}
element("quiz-direction").value="en";element("dictionary-order").value="en";
const doc={documentElement:new Element("html"),getElementById:element,createElement:tag=>new Element(tag),querySelectorAll:()=>views.map(element)};
const storage=new Map(),localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};
const url="https://example.test/?lang=javenoerl&view=dictionary";
const boot=vm.createContext({window,document:doc,localStorage,location:{href:url,search:"?lang=javenoerl&view=dictionary"},history:{replaceState(){}},URL,URLSearchParams,confirm:()=>true});
vm.runInContext(app,boot);
assert.equal(element("heading").textContent,"Javenœrl");
assert.equal(element("dictionary").hidden,false);
assert.equal(element("translate").hidden,true);
assert.equal(element("entries").children.length,36);
assert.equal(element("dictionary-page").textContent,"Page 1 of 32");
element("dictionary-next").onclick();
assert.equal(element("dictionary-page").textContent,"Page 2 of 32");
element("search").value="qzxqzxqzx";element("search").oninput();
assert.equal(element("count").textContent,"0 of 1118 entries");
assert.equal(element("dictionary-next").disabled,true);
element("theme").onclick();assert.equal(doc.documentElement.dataset.theme,"light");
element("source").value="I see the house.";element("source").oninput();
assert.equal(element("character-count").textContent,"16 characters");
element("run").onclick();assert.ok(element("result").textContent);assert.equal(element("copy").disabled,false);
element("language").events.change({target:{value:"rasnovian"}});
assert.equal(element("heading").textContent,"Rasnovian");assert.equal(element("source").value,"I see the house.");assert.equal(element("result").textContent,"Ik nu husuta se.");
element("swap").onclick();assert.equal(element("source").value,"Ik nu husuta se.");assert.equal(element("from").textContent,"Rasnovian");
element("run").onclick();assert.equal(element("result").textContent,"I see the house.");
element("clear").onclick();assert.equal(element("copy").disabled,true);assert.equal(element("character-count").textContent,"0 characters");
console.log("Workspace startup and interaction checks passed.");
