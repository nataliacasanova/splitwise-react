import { Group, NewGroup } from "../models/Group";


export  interface GroupRepository {
    getGroupList(): Promise<Group[]>;
    getGroupById(id: number): Promise<Group>;
    addGroup(name: string): void;
}
