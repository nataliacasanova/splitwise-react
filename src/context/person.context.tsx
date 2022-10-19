import { createContext } from 'react';

const PersonListContext = createContext({
  personList: [],
  updatePersonList: (personList: any) => {},
});

export default PersonListContext;
