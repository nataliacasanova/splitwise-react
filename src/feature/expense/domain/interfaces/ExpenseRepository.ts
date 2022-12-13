import { Expense } from "../models/Expense";

export  interface ExpenseRepository {
    getExpenseList(): Promise<Expense[]>;
    getExpenseById(id: number): Promise<Expense>;
    addExpense(expense: Expense): void;
}

