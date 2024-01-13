import { Schema, Document, model } from 'mongoose';

interface propertyAd extends Document {
    title: string;
    type: string;
    city: string;
    price: string;
    bedRooms: number;
    bathRooms: number;
    area: string;
    studio: boolean;
    website: string;
    propertyType: string;
    url: string;
    imageUrl?: string;
}

const adASchema = new Schema<propertyAd>({
    title: {
        type: String,
        trim: true,
        index: true,
    },
    type: {
        type: String,
        trim: true,
        index: true,
    },
    city: {
        type: String,
        trim: true,
        index: true,
    },
    price: {
        type: String,
        index: true,
    },
    bedRooms: {
        type: Number,
        index: true,
    },
    bathRooms: {
        type: Number,
        index: true,
    },
    area: {
        type: String,
        index: true,
    },
    studio: {
        type: Boolean,
        index: true,
    },
    website: {
        type: String,
        index: true,
    },
    propertyType: {
        type: String,
        index: true,
    },
    url: {
        type: String,
        index: true,
    },
    imageUrl: {
        type: String,
    },
},
    {
        timestamps: true,
    });

const propertyAdModel = model<propertyAd>('propertyAd', adASchema);

export default propertyAdModel;
