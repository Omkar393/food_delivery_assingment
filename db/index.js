import mongoose from "mongoose";

export const dbConnection = async () => {
    return mongoose.connect(process.env.MONGO_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('Database connected successfully');
    }).catch((err) => {
        console.log(err);
    })
}