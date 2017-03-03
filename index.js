'use strict';

const fs = require('fs');
const path = require('path');

const modelPath = path.join(__dirname, 'src');
fs.readdirSync(modelPath)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(path.join(modelPath, file)));
