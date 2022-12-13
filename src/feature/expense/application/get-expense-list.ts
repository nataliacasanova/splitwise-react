import { MockExpenseRepository } from "../infrastructure/repositories/api-expense-repository";

  
  export  class GetExpenseList {
    repository: MockExpenseRepository;
    constructor(repository: MockExpenseRepository) {
        this.repository = repository;
    }

    async execute() {
      const expenseList = await this.repository.getExpenseList();
      return expenseList;
    }
}