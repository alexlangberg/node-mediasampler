'use strict';

var sitesampler = require('sitesampler');

var options = {
  'rule': { 'second': [15, 30, 45, 1] },
  'targets': [
    {
      'url': 'http://www.tv2.dk'
    }
  ],
  'options': {
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
    'gzip': false
  },
  'rethrowErrors': false
};


var ss = sitesampler(options);

ss.start();
