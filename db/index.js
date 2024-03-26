import mongoose from "mongoose";

export const dbConnection = async () => {
    return mongoose.connect(process.env.MONGO_URl).then(() => {
        console.log('Database connected successfully');
    }).catch((err) => {
        console.log(err);
    })
}