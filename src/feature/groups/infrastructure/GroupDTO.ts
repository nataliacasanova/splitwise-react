import { Person } from "../../person/domain/models/User";


export interface GroupDTO {
    name: string;
    transactions: any[];
    id: number;
    people: Person[];
}
