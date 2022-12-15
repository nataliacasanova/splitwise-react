

export interface Balance {
    id: {
        balance: number;
        name: string;
        totalAmount: number;
    }
}

export interface TotalBalance {
    totalAmount: number;
    name: string;
    balance: number;
}
