import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import jobScriptModel from './../../models/jobs/scriptAnalytics';

export const scriptAnalytics = asyncHandler(async (_req: Request, _res: Response) => {
    const analytics = await jobScriptModel.create({ ..._req.body });
    _res.status(201).json({ data: analytics, success: true });
});
