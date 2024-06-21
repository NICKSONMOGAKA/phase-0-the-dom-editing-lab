const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { expect } = require('chai');

describe('index.html', () => {
  let dom;
  let document;

  before(() => {
    const filePath = path.join(__dirname, '..', 'index.html');
    const html = fs.readFileSync(filePath, 'utf-8');
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  it('contains an <h1> tag', () => {
    const h1 = document.querySelector('h1');
    expect(h1).to.not.be.null;
    expect(h1.innerHTML).to.include('Welcome to the Test Page');
  });

  it('contains a <p> tag', () => {
    const p = document.querySelector('p');
    expect(p).to.not.be.null;
  });

  it('within the <p>, it contains a <strong> tag', () => {
    const strong = document.querySelector('p strong');
    expect(strong).to.not.be.null;
    expect(strong.innerHTML).to.include('strong');
  });

  it('within the <p>, it contains an <em> tag', () => {
    const em = document.querySelector('p em');
    expect(em).to.not.be.null;
    expect(em.innerHTML).to.include('emphasized');
  });

  it('within the <p>, it contains an <a> tag', () => {
    const a = document.querySelector('p a');
    expect(a).to.not.be.null;
    expect(a.innerHTML).to.include('link');
  });

  it('within the <body>, it contains a <table> tag', () => {
    const table = document.querySelector('table');
    expect(table).to.not.be.null;
  });
});
