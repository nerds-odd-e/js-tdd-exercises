var JSDOM = require('jsdom').JSDOM;
var dom = new JSDOM('DOCTYPE html');

describe('A component in the UI', function() {
  var div;
  var document;
  beforeEach(function() {
    document = dom.window.document;
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  it('part of this code need to be in production', function() {
    div.innerHTML = '<textarea id="my-area"></textarea>';
    expect(document.getElementById('my-area').value).toEqual('xxx');
  });
});
