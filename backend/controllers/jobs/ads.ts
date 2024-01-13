import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import jobsAdModel from './../../models/jobs/ads';

export const ads = asyncHandler(async (_req: Request, _res: Response) => {
    const ads = [..._req.body];

    if (!ads) return;

    const duplicateAds = [];
    for (const ad of ads) {
        const adExists = await jobsAdModel.findOne({ url: ad.url });

        if (adExists) {
            duplicateAds.push(ad);
        } else {
            await jobsAdModel.create(ad);
        }
    }

    _res.status(200).json({ duplicateAds: duplicateAds.length });
});
