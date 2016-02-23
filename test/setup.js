var jsdom = require('jsdom').jsdom;


global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.confirm = (message) => { console.error('[confirm without response] ' + message); }
