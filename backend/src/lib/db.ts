import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path: '.env.local', quiet: true});
const MONGOURI = process.env.MONGO_URI ;
export const connectDB = async () => {
    try {
        if(!MONGOURI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        await mongoose.connect(MONGOURI);
        console.log('MongoDB connected');
    }
    catch (error: any) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // 1 -> failure, o -> success
    }
}