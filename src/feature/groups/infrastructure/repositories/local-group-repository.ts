import { GroupRepository } from "../../domain/interfaces/GroupRepository";
import { Group } from "../../domain/models/Group";


export class LocalGroupRepository implements GroupRepository {

    private readonly groupKey = 'GRUPOS';

    getGroupList(): Promise<Group[]> {
       return JSON.parse(window.localStorage.getItem('group')) ? JSON.parse(window.localStorage.getItem('group')) : [];
    }
    getGroupById(id: number): Promise<Group> {
        const groups = JSON.parse(window.localStorage.getItem('group')) ? JSON.parse(window.localStorage.getItem('group')) : [];
        return groups?.find((group: Group) => group?.id === id);
    }

    addGroup(newGroup: Group): void {
        const groups = JSON.parse(window.localStorage.getItem('group')) ? JSON.parse(window.localStorage.getItem('group')) : [];
        if (groups?.length) {
            const isUnique = groups.findIndex((group: Group) => group?.name === newGroup?.name) === -1;
            if (isUnique) {
                groups.push(newGroup);
                window.localStorage.setItem(this.groupKey, JSON.stringify(groups));
                return;
            }
            if (!isUnique) {
                throw new Error("Duplicated group");
            }
        }
        groups.push(newGroup);
        window.localStorage.setItem(this.groupKey, JSON.stringify(groups));
    }
}