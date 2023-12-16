import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import adModel from '../../models/real-estate/ads';

export const ads = asyncHandler(async (_req: Request, _res: Response) => {
    const ads = [..._req.body];

    if (!ads) return;

    const duplicateAds = [];
    for (const ad of ads) {
        const adExists = await adModel.findOne({ url: ad.url });

        if (adExists) {
            duplicateAds.push(ad);
        } else {
            await adModel.create(ad);
        }
    }

    _res.status(200).json({ duplicateAds: duplicateAds.length });
});
