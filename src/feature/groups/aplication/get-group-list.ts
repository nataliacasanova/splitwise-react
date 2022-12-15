import { GroupRepository } from "../domain/interfaces/GroupRepository";
import { Group } from "../domain/models/Group";


export class GetGroupList {
    repository: GroupRepository;
    constructor(repository: GroupRepository) {
        this.repository = repository;
    }

    execute() {
        return this.repository.getGroupList();
    }
}