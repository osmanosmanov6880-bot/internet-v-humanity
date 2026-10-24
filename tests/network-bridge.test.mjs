import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const script=/<script>([\s\S]*?)<\/script>/i.exec(html)?.[1];

test('existing standalone film JavaScript parses without npm dependencies',()=>{
 assert.ok(script,'inline cinema runtime is present');
 assert.doesNotThrow(()=>new vm.Script(script,{filename:'cinema-preview-inline.js'}));
});
test('network continuation exists only after the two genuine branch endings',()=>{
 assert.match(script,/if\(id==="end_human"\|\|id==="end_algorithm"\)/);
 assert.match(script,/pane\.append\(eyebrow,heading,description,link\);root\.append\(pane\)/);
 for(const scene of ['intro','court','human','algorithm'])
  assert.ok(!new RegExp('if\\(id==="'+scene+'"').test(script));
 assert.match(script,/https:\/\/marcosa\.club\//);
 assert.match(script,/link\.target="_blank"/);
 assert.match(script,/link\.rel="noopener noreferrer"/);
 assert.match(script,/Никакие решения или данные этого фильма туда не отправляются/);
});
test('no tracking identifiers, automatic redirects or remote execution',()=>{
 assert.ok(!/fetch\(|XMLHttpRequest|sendBeacon|new Image\(|location\.assign|location\.replace|utm_source|service_role/.test(script));
 assert.match(html,/\.continuation/);
 assert.match(html,/:focus-visible/);
});
