import { PersonRepository } from "../../domain/interfaces/UserRepository";
import { NewPerson } from "../../domain/models/User";

export class MockPersonRepository implements PersonRepository {
    addUser(user: NewPerson): void {
        throw new Error("Method not implemented.");
    }
  
}