import { createContext, useContext, useState } from "react";
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({ query: "", printType: "" });
  const [user, setUser] = useState();
  const values = { search, setSearch, user, setUser };

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
