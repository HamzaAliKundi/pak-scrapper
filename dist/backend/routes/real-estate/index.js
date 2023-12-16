"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ads_1 = require("../../controllers/real-estate/ads");
const scriptAnalytics_1 = require("../../controllers/real-estate/scriptAnalytics");
const realEstateRouter = express_1.default.Router();
realEstateRouter.post("/zameen/ads", ads_1.ads);
realEstateRouter.post("/zameen/analytics", scriptAnalytics_1.scriptAnalytics);
exports.default = realEstateRouter;
