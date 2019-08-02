let express = require('express'),
path = require('path');

exports.command = 'server';
exports.describe = 'server command';
exports.builder = {
    // port
    p: {
      default: process.env.PORT || 8080
    }
};
exports.handler = function (argv) {
    console.log('> jskey-webview: server command:');
    console.log(argv.p)
};
