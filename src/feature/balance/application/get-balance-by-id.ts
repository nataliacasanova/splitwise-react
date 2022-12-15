import { MockBalanceRepository } from "../infrastructure/repositories/api-balance-repository";


export  class GetBalanceById {
    repository: MockBalanceRepository;
    constructor(repository: MockBalanceRepository) {
        this.repository = repository;
    }

    async execute(id: number) {
      const balanceList = await this.repository.getBalanceById(id);
      return balanceList;
    }
}