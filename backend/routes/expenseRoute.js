import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { addExpense, deleteExpense, downloadExpenseExcel, getAllexpense, getExpenseOverview, updateexpense } from '../controllers/expenseController.js';

const expenseRouter = express.Router();

expenseRouter.post("/add", authMiddleware, addExpense);
expenseRouter.get("/get", authMiddleware, getAllexpense);

expenseRouter.put("/update/:id", authMiddleware, updateexpense);
expenseRouter.get("/downloadexcel", authMiddleware, downloadExpenseExcel);

expenseRouter.delete("/delete/:id", authMiddleware, deleteExpense);
expenseRouter.get("/overview", authMiddleware, getExpenseOverview);

export default expenseRouter;