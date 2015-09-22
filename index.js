'use strict';

var sitesampler = require('sitesampler');
var ss = sitesampler('sitesampler.json');

ss.on('results', function(data) {
  //console.log(data);
});

ss.start();
