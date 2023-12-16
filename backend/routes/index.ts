import express from 'express';
import realEstateRouter from './real-estate';

const router = express.Router();

router.use("/real-estate", realEstateRouter);

export default router;