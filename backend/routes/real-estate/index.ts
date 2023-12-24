import express from 'express';
import { ads } from '../../controllers/real-estate/ads';
import { scriptAnalytics } from '../../controllers/real-estate/scriptAnalytics';

const realEstateRouter = express.Router();

realEstateRouter.post("/ads", ads);
realEstateRouter.post("/analytics", scriptAnalytics);

export default realEstateRouter;