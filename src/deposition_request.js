'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepositionRequestSchema = new Schema({
    ipfsHash: String,
    remoteAddress: String,
    submittedAt: {type: Date, default: Date.now},
    state: {type: String, default: 'new'}
});

mongoose.model('DepositionRequest', DepositionRequestSchema);
