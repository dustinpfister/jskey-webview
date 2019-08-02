let pack = require('../package.json'),
path = require('path');

exports.command = 'server';
exports.describe = 'server command';
exports.handler = function (argv) {
    console.log('> jskey-webview: server command:');
};
