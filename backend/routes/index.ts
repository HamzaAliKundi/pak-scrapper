import express from 'express';
import realEstateRouter from './real-estate';
import jobsRouter from './jobs';

const router = express.Router();

router.use("/jobs", jobsRouter);
router.use("/real-estate", realEstateRouter);

export default router;