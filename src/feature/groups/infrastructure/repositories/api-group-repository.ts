import { GroupRepository } from "../../domain/interfaces/GroupRepository";
import { Group, NewGroup } from "../../domain/models/Group";

export class MockGroupRepository implements GroupRepository {
  
    async getGroupList(): Promise<Group[]> {
        try {
            const response = await fetch("");
            const data = await response.json();
            return data.message;
          } catch (error) {
            return new Promise<Group[]>((resolve, reject) => {
              reject(error);
            });
          }
    }
    async getGroupById(id: number): Promise<Group> {
        throw new Error("Method not implemented.");
    }
    addGroup(newGroup: NewGroup): void {
        throw new Error("Method not implemented.");
    }
    
}