import express from 'express';
import { ads } from '../../controllers/jobs/ads';
import { scriptAnalytics } from '../../controllers/jobs/scriptAnalytics';

const jobsRouter = express.Router();

jobsRouter.post("/ads", ads);
jobsRouter.post("/analytics", scriptAnalytics);

export default jobsRouter;