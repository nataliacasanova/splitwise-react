import { Balance } from "../domain/models/Balance";
import { MockBalanceRepository } from "../infrastructure/repositories/api-balance-repository";


export  class AddBalance {
    repository: MockBalanceRepository;
    constructor(repository: MockBalanceRepository) {
        this.repository = repository;
    }

    execute(balance: Balance[]) {
      return this.repository.addBalance(balance);
    }
}