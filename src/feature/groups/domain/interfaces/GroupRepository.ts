import { Group } from "../models/Group";


export  interface GroupRepository {
    getGroupList(): Promise<Group[]>;
    getGroupById(id: number): Promise<Group>;
    addGroup(newGroup: Group): void;
}
