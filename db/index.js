import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log('Database connected successfully');
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}
