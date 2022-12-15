import { CardModel } from "../../../expense/ui/card-detail/card-detail.model";


export interface GroupModel {
    name: string;
    transactions: CardModel[];
    id?: number;
    people: Person[];
}

export interface Person {
    id: number;
    name: string;
}


export const CAFETERIA_USERS = ['Natalia', 'Maria', 'Pedro'];