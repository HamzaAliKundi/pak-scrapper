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
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const chalk_1 = __importDefault(require("chalk"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield mongoose_1.default.connect("mongodb://scrapper:scrapper@ac-s8tcg5j-shard-00-00.shw1r7i.mongodb.net:27017,ac-s8tcg5j-shard-00-01.shw1r7i.mongodb.net:27017,ac-s8tcg5j-shard-00-02.shw1r7i.mongodb.net:27017/?replicaSet=atlas-x7uyfk-shard-0&ssl=true&authSource=admin");
        console.log(chalk_1.default.gray(chalk_1.default.green(`mongoDB connected : ${conn.connection.host}`)));
    }
    catch (error) {
        console.log("Connected error : ", error);
        process.exit(1);
    }
});
exports.connectDB = connectDB;
