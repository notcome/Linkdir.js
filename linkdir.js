#!/usr/bin/env node

var fs = require('fs');
var console = require('console');

var args = process.argv;
var helpStr = "Link:\nlinkdir %src %dest\nUnlink:\nlinkdir %dir";

if (args.length == 3) {
  if (args[2] == '-h')
    console.log(helpStr);
  else fs.unlinkSync(args[2]);
} else if (args.length == 4) {
  fs.linkSync(args[2], args[3]);
}
else console.log('Check "linkdir -h" for usage.');
