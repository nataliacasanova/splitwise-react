import { Balance } from "../models/Balance";

export  interface BalanceRepository {
    getBalanceList(): Promise<Balance[]>;
    getBalanceById(id: number): Promise<Balance>;
    addBalance(balance: Balance[]): void;
}

