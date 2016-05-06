'use strict';

var sitesampler = require('sitesampler');

var options = {
  'targets': [
    {
      'url': 'http://www.github.com'
    }
  ],
  'options': {
    'rule': { 'second': [15, 30, 45, 1] },
    'needleRetry': {
      'needleRetry': {
        'fullDocument': true
      },
      'retry': {
        'retries': 10
      }
    }
  },
  'chronostore': {
    'root': './chronostore',
    'format': ['YYYYMMDD'],
    'gzip': false,
    'log': true
  },
  'rethrowErrors': false
};


var ss = sitesampler(options);

ss.start();
