import { GroupRepository } from "../domain/interfaces/GroupRepository";
import { Group } from "../domain/models/Group";

export class AddGroup {
    repository: GroupRepository;
    //constructor(@inject(GROUP_REPOSITORY) private readonly eventRepository: EventRepository) --> INYECCION DE DEPENDENCIAS PARA EVITAR INSTANCIAR EL REPO CADA VEZ
    constructor(repository: GroupRepository) {
        this.repository = repository;
    }

    execute(newGroup: Group) {
        return this.repository.addGroup(newGroup);
    }
}