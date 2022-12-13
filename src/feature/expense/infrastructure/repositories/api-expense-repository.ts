import { ExpenseRepository } from "../../domain/interfaces/ExpenseRepository";
import { Expense, newExpense } from "../../domain/models/Expense";

//client: Http
export class MockExpenseRepository implements ExpenseRepository {
  
    async getExpenseList(): Promise<Expense[]> {
        try {
            const response = await fetch("");
            const data = await response.json();
            return data.message;
          } catch (error) {
            return new Promise<Expense[]>((resolve, reject) => {
              reject(error);
            });
          }
    }
    async getExpenseById(id: number): Promise<Expense> {
        throw new Error("Method not implemented.");
    }
    addExpense(expense: newExpense): void {
        throw new Error("Method not implemented.");
    }
    
}