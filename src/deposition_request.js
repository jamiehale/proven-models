'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepositionRequestSchema = new Schema({
    ipfsHash: String,
    remoteAddress: String,
    submittedAt: Date
});

mongoose.model('DepositionRequest', DepositionRequestSchema);
