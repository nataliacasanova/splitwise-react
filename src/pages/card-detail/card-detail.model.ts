import { Person } from "../../components/group/group.model";

export interface CardModel {
    id: number;
    description: string;
    amount: string;
    title: string;
    date: string;
    person: Person;
}
