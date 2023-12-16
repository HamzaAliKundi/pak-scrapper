"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adASchema = new mongoose_1.Schema({
    title: {
        type: String,
        trim: true,
        index: true,
    },
    type: {
        type: String,
        trim: true,
        index: true,
    },
    city: {
        type: String,
        trim: true,
        index: true,
    },
    price: {
        type: String,
        index: true,
    },
    bedRooms: {
        type: Number,
        index: true,
    },
    bathRooms: {
        type: Number,
        index: true,
    },
    area: {
        type: String,
        index: true,
    },
    studio: {
        type: Boolean,
        index: true,
    },
    website: {
        type: String,
        index: true,
    },
    propertyType: {
        type: String,
        index: true,
    },
    url: {
        type: String,
        index: true,
    },
    imageUrl: {
        type: String,
    },
}, {
    timestamps: true,
});
const adModel = (0, mongoose_1.model)('ad', adASchema);
exports.default = adModel;
