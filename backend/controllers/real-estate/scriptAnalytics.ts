import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import propertyScriptModel from '../../models/real-estate/scriptAnalytics';

export const scriptAnalytics = asyncHandler(async (_req: Request, _res: Response) => {
    const analytics = await propertyScriptModel.create({ ..._req.body });
    _res.status(201).json({ data: analytics, success: true });
});
