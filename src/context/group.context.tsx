import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from 'react';
import { GroupModel } from '../components/group/group.model';

type GroupState = {
  groups: GroupModel[],
  updateGroups?: Dispatch<SetStateAction<GroupModel[]>>,
}
const GroupContext = createContext<GroupState>({
  groups: [],
});

export const GroupProvider: FC<PropsWithChildren<GroupState>> = props => {
  const [groups, setGroups] = useState(props.groups);
  return (
    <GroupContext.Provider value={{ groups, updateGroups: setGroups }}>
      {props.children}
    </GroupContext.Provider>
  )
}

export const useGroupContext = (): GroupState => useContext(GroupContext);


