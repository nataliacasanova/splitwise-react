import { BalanceRepository } from "../../domain/interfaces/BalanceRepository";
import { Balance } from "../../domain/models/Balance";

//client: Http
export class MockBalanceRepository implements BalanceRepository {
    addBalance(balance: Balance[]): void {
      throw new Error("Method not implemented.");
    }
    getBalanceById(id: number): Promise<Balance> {
      throw new Error("Method not implemented.");
    }
  
    async getBalanceList(): Promise<Balance[]> {
        try {
            const response = await fetch("");
            const data = await response.json();
            return data.message;
          } catch (error) {
            return new Promise<Balance[]>((resolve, reject) => {
              reject(error);
            });
          }
    } 
    
}