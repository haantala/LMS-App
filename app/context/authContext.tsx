import { createContext } from "react";


export interface AuthContextType {
    userData: any | null;
    setUserData: React.Dispatch<React.SetStateAction<any | null>>;
  }

export const AuthContext = createContext<AuthContextType | null>(null)