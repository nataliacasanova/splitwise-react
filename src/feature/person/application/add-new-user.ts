import { NewPerson, Person } from "../domain/models/User";
import { MockPersonRepository } from "../infrastructure/repositories/api-person-repository";

export class AddNewPerson {
    repository: MockPersonRepository;
    constructor(repository: MockPersonRepository) {
        this.repository = repository;
    }

    execute(user: NewPerson) {
        return this.repository.addUser(user);
    }
}