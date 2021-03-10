import { User } from 'mockData';
import React, { createContext, FC, useState } from 'react';

export type Data = (User | string)[];

interface TeamMatesContextData {
  data: Data | null;
  setData: (data: Data | null) => void;
}

export const TeamMatesContext = createContext<TeamMatesContextData>({
  data: null,
  setData: (): void => {},
});

export const TeamMatesContextProvider: FC = ({ children }) => {
  const [data, setData] = useState<Data | null>(null);

  return (
    <TeamMatesContext.Provider value={{
      data,
      setData: setCurrentData,
    }}>
      {children}
    </TeamMatesContext.Provider>
  );

  function setCurrentData(data: Data | null): void {
    setData(data);
  }
}

export default TeamMatesContext;
