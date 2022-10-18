import { createContext } from 'react';

const GroupContext = createContext({
  groups: [],
  updateGroups: (groups: any) => {},
});

export default GroupContext;
