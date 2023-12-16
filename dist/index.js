"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 5000;
const cors_1 = __importDefault(require("cors"));
const chalk_1 = __importDefault(require("chalk"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./backend/routes"));
const db_1 = require("./backend/config/db");
const real_estate_1 = require("./scrapper/real-estate");
const errorHandler_1 = require("./backend/middlewares/errorHandler");
const app = (0, express_1.default)();
(0, db_1.connectDB)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api/v1", routes_1.default);
app.get('/ping', (_req, _res) => {
    _res.json("sada");
});
app.use(errorHandler_1.errorHandler);
setTimeout(() => {
    (0, real_estate_1.realEstateScrapper)();
}, 15000);
app.listen(port, () => console.log(chalk_1.default.green(`App is listining on port : ${port}!`)));
