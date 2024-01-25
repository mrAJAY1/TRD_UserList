import { createContext } from "react";
import useFetch from "./useFetch";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const users = useFetch();
  return <userContext.Provider value={users}>{children}</userContext.Provider>;
};

export default UserContextProvider;
