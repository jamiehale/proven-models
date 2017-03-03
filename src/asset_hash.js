'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssetHashSchema = new Schema({
    ipfsHash: String,
    hashType: String,
    state: String
});

mongoose.model('AssetHash', AssetHashSchema);
