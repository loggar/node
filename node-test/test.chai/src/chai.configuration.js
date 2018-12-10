var chai = require('chai');

// @default false:boolean
chai.config.includeStack = true; // turn on stack trace

// @default true:boolean
chai.config.showDiff = false; // turn off reporter diff display

// @default 40:number
chai.config.truncateThreshold = 0; // disable truncating

console.log(chai.config);