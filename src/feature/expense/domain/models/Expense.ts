import { Person } from "../../../person/domain/models/User";


export interface Expense {
    id: number;
    description: string;
    amount: string;
    title: string;
    date: string;
    person: Person;

}

export type newExpense = Omit<Expense, 'id'>;