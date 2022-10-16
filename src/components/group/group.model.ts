import { CardModel } from "../card/card-detail/card-detail.model";


export interface GroupModel {
    name: string;
    transactions: CardModel[];
    id?: string;
}