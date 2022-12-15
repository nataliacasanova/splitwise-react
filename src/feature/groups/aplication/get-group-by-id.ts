import { GroupRepository } from "../domain/interfaces/GroupRepository";


export  class GetGroupById {
    repository: GroupRepository;
    constructor(repository: GroupRepository) {
        this.repository = repository;
    }

    execute(id: number) {
        return this.repository.getGroupById(id);
    }
}