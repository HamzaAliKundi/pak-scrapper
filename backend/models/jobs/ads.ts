import { Schema, Document, model } from 'mongoose';

interface jobsAd extends Document {
    title: string,
    location: string,
    description: string,
    postedOn: string,
    experience: string,
    salary: string,
    city: string,
    website: string,
    url: string,
};

const adASchema = new Schema<jobsAd>({
    title: {
        type: String,
        trim: true,
        index: true,
    },
    location: {
        type: String,
        trim: true,
        index: true
    },
    description: {
        type: String,
        trimg: true,
        index: true
    },
    postedOn: {
        type: String,
        trim: true,
        index: true
    },
    experience: {
        type: String,
        trim: true,
        index: true
    },
    salary: {
        type: String,
        trim: true,
        index: true
    },
    city: {
        type: String,
        trim: true,
        index: true
    },
    website: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    }
},
    { timestamps: true }
);

const jobsAdModel = model<jobsAd>("jobsAd", adASchema);

export default jobsAdModel;