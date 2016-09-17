#!/usr/bin/env node

var files = process.argv.slice(2);
var fs = require('fs');
var path = require('path');

if (files.length) {
  console.log('Normalizing result files...');

  files.forEach(function(file) {
    var json = require(path.resolve(process.cwd(), file));
    if (Array.isArray(json)) {
      console.log('Normalizing ', file);
      json.forEach(function(feature) {
        if (feature && Array.isArray(feature.elements)) {
          feature.elements.forEach(function(scenario) {
            if (scenario && Array.isArray(scenario.steps)) {
              scenario.steps.forEach(function(step) {
                if (step && !step.result) {
                  step.result = {
                    status: 'passed',
                    duration: 0
                  };
                }
              });
            }
          });
        }
      });
      fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf8');
    }
  });
}
