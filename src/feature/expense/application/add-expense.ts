import { MockExpenseRepository } from "../infrastructure/repositories/api-expense-repository";
import { Expense, newExpense } from "../domain/models/Expense";

export  class AddExpense {
    repository: MockExpenseRepository;
    constructor(repository: MockExpenseRepository) {
        this.repository = repository;
    }

    execute(expense: Expense) {
        return this.repository.addExpense(expense);
    }
}