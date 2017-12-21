'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AssetHashSchema = new Schema({
    ipfsHash: String,
    hashType: String,
    state: String
});

mongoose.model('AssetHash', AssetHashSchema);
