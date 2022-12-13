import { MockExpenseRepository } from '../infrastructure/repositories/api-expense-repository';



export  class GetExpenseById {
    repository: MockExpenseRepository;
    constructor(repository: MockExpenseRepository) {
        this.repository = repository;
    }

    execute(id: number) {
        return this.repository.getExpenseById(id);
    }
}