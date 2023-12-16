"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ads = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const ads_1 = __importDefault(require("../../models/real-estate/ads"));
exports.ads = (0, express_async_handler_1.default)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const ads = [..._req.body];
    if (!ads)
        return;
    const duplicateAds = [];
    for (const ad of ads) {
        const adExists = yield ads_1.default.findOne({ url: ad.url });
        if (adExists) {
            duplicateAds.push(ad);
        }
        else {
            yield ads_1.default.create(ad);
        }
    }
    _res.status(200).json({ duplicateAds: duplicateAds.length });
}));
