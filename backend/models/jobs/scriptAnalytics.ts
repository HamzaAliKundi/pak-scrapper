import { Schema, Document, model } from 'mongoose';

interface jobScript extends Document {
    startTime: Date,
    totalCount: number
    timeTakenToExecute: number,
    scriptErrors: object[],
    website: string,
}

const scriptSchema = new Schema<jobScript>({

    startTime: {
        type: Date,
        required: true,
    },
    totalCount: {
        type: Number,
        required: true,
    },
    timeTakenToExecute: {
        type: Number,
        required: true,
    },
    scriptErrors: {
        type: [Object],
    },
    website: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

const jobScriptModel = model<jobScript>('jobScript', scriptSchema);

export default jobScriptModel;