export  class GetBalance {
    repository: MockBalanceRepository;
    constructor(repository: MockBalanceRepository) {
        this.repository = repository;
    }

    async execute() {
      const balanceList = await this.repository.getBalance();
      return balanceList;
    }
}