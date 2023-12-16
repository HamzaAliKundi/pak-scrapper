import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import scriptModel from '../../models/real-estate/scriptAnalytics';

export const scriptAnalytics = asyncHandler(async (_req: Request, _res: Response) => {
    const analytics = await scriptModel.create({ ..._req.body });
    _res.status(201).json({ data: analytics, success: true });
});
