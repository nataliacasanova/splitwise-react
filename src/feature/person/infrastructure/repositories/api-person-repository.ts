import { PersonRepository } from "../../domain/interfaces/UserRepository";
import { Person } from "../../domain/models/User";

export class MockPersonRepository implements PersonRepository {
    addUser(user: Person): void {
        throw new Error("Method not implemented.");
    }
  
    
    
}