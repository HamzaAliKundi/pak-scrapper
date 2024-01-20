import express, { Request, Response } from "express"
const port = 5000
import cors from "cors"
import chalk from 'chalk'
import logger from 'morgan'
import router from "./backend/routes"
import { jobsScrapper } from './scrapper/jobs'
import { connectDB } from './backend/config/db';
import { realEstateScrapper } from './scrapper/real-estate'
import { errorHandler } from './backend/middlewares/errorHandler';

const app = express();

connectDB();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", router);

app.get('/ping', (_req: Request, _res: Response) => {
    _res.json("status : 200");
});

app.use(errorHandler);

setTimeout(() => {
    // realEstateScrapper();
    jobsScrapper();
}, 15000);

app.listen(port, () => console.log(chalk.green(`🚀 App is listining on port : ${port}!`)))