export interface CardModel {
    description: string;
    amount: string;
    title: string;
    date: string;
    person?: string;
    operation?: string;
}

export const DIVISA = ['€', '$', '£', 'zł'];
export const PERSONAS = ['Natalia', 'Maria', 'Pedro', 'Luis']