import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://growthamanul_db_user:ZLkprqTIz09UK2Ur@cluster0.ktlzkbj.mongodb.net/Expense")
        .then(() => console.log("DB CONNECTED"));
}