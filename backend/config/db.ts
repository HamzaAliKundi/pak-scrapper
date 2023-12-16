import mongoose from 'mongoose';
import chalk from 'chalk';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://scrapper:scrapper@ac-s8tcg5j-shard-00-00.shw1r7i.mongodb.net:27017,ac-s8tcg5j-shard-00-01.shw1r7i.mongodb.net:27017,ac-s8tcg5j-shard-00-02.shw1r7i.mongodb.net:27017/?replicaSet=atlas-x7uyfk-shard-0&ssl=true&authSource=admin");
        console.log(chalk.gray(chalk.green(`mongoDB connected : ${conn.connection.host}`)));
    } catch (error) {
        console.log("Connected error : ", error);
        process.exit(1);
    }
};