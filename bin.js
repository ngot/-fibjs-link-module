#!/usr/bin/env node

var fs = require('fs');
fs.symlinkSync('./node_modules', './.modules', 'dir');
console.log('link done!')