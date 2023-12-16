"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const scriptSchema = new mongoose_1.Schema({
    startTime: {
        type: Date,
        required: true,
    },
    totalCount: {
        type: Number,
        required: true,
    },
    timeTakenToExecute: {
        type: Number,
        required: true,
    },
    scriptErrors: {
        type: [Object],
    },
    website: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const scriptModel = (0, mongoose_1.model)('script', scriptSchema);
exports.default = scriptModel;
