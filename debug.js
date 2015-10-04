'use strict';

var sitesampler = require('sitesampler');

var options = {
  'rule': { 'second': [15, 30, 45, 0] },
  'targets': [
    {
      'url': 'http://www.google.dk',
      'goldwasher': {
        'contractAdjecent': false
      }
    }
  ],
  'options': {
    'goldwasher': {
      'selector': 'h1, h2, h3, h4, h5, h6'
    }
  },
  'chronostore': {
    'root': './chronostore',
    'format': ['YYYYMMDD'],
    'gzip': false
  },
  'rethrowErrors': false
};


var ss = sitesampler(options);

ss.start();
