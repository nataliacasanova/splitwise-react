import { IgnorePlugin } from "webpack";
import { GroupRepository } from "../../domain/interfaces/GroupRepository";
import { Group, NewGroup } from "../../domain/models/Group";


export class LocalGroupRepository implements GroupRepository {

    private static groupKey = 'GRUPOS';

    getGroupList(): Promise<Group[]> {
        throw new Error("Method not implemented.");
    }
    getGroupById(id: number): Promise<Group> {
        throw new Error("Method not implemented.");
    }
    addGroup(name: string): void {
        const groups = JSON.parse(window.localStorage.getItem('group')) ? JSON.parse(window.localStorage.getItem('group')) : [];
        if (groups?.length) {
            const isUnique = groups.findIndex((group: Group) => group.name === name) === -1;
            if (isUnique) {
                // groups.push(newGroup);
                // window.localStorage.setItem(groupKey, JSON.stringify(groups));
                return;
            }

        }
        throw new Error("Duplicated group");
    }
}