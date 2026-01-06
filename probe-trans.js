// probe-trans.js
const fs = require('fs');
const { JSDOM } = require('jsdom');
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html);
const doc = dom.window.document;
const keys = [...doc.querySelectorAll('[data-translate]')].map(el=>(el.dataset && el.dataset.translate) || (el.dataset && el.dataset.translate) || el.($1.dataset && $1.dataset.translate) || getDataTranslate($1));
const uniq = [...new Set(keys)];
console.log('Total data-translate:', uniq.length);
console.log(uniq);
