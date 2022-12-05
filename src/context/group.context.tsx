import { createContext } from 'react';
import { GroupModel } from '../components/group/group.model';

const GroupContext = createContext<{
  groups: GroupModel[];
  updateGroups: (groups: GroupModel[]) => void;
}>({
  groups: [],
  updateGroups: (groups: GroupModel[]) => {},
});



export default GroupContext;
