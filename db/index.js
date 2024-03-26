import mongoose from "mongoose";

export const dbConnection = async () => {
    console.log(process.env.MONGO_URl)
    try {
        mongoose.connect(process.env.MONGO_URl).then(() => {
            console.log('Database connected successfully');
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}
