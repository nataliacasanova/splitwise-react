import { Person } from "../models/User";

export  interface PersonRepository {
    addUser(user: Person): void;
}