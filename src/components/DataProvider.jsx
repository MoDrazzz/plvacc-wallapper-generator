import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [photo, setPhoto] = useState();
  const [details, setDetails] = useState();

  return (
    <DataContext.Provider
      value={{
        photo,
        setPhoto,
        details,
        setDetails,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
