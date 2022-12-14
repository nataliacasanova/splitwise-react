import { MockBalanceRepository } from "../infrastructure/repositories/api-balance-repository";

export  class GetBalance {
    repository: MockBalanceRepository;
    constructor(repository: MockBalanceRepository) {
        this.repository = repository;
    }

    async execute() {
      const balanceList = await this.repository.getBalanceList();
      return balanceList;
    }
}