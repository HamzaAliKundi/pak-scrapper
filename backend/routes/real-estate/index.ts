import express from 'express';
import { ads } from '../../controllers/real-estate/ads';
import { scriptAnalytics } from '../../controllers/real-estate/scriptAnalytics';

const realEstateRouter = express.Router();

realEstateRouter.post("/zameen/ads", ads);
realEstateRouter.post("/zameen/analytics", scriptAnalytics);

export default realEstateRouter;