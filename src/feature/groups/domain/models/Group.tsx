import { Person } from "../../../person/domain/models/User";


export interface Group {
    name: string;
    transactions: any[];
    id: number;
    people: Person[];
}

export type NewGroup = Omit<Group, 'id'>;
