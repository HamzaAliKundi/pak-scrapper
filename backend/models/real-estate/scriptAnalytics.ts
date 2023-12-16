import { Schema, Document, model } from 'mongoose';

interface script extends Document {
    startTime: Date,
    totalCount: number
    timeTakenToExecute: number,
    scriptErrors: object[],
    website: string,
}

const scriptSchema = new Schema<script>({

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

const scriptModel = model<script>('script', scriptSchema);

export default scriptModel;