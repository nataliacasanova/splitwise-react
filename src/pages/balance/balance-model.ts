

export interface BalanceModel {
    id: {
        total: number;
    };
}

export interface TotalBalanceModel{
    id:{
        balance: number;
        totalAmount: number;
        name: string;
    }
}