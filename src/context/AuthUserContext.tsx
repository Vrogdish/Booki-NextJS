"use client"
import useAuthState from "@/hooks/use-auth-state";
import { ReactNode, useContext } from "react";
import { createContext } from "react";

const init = {
  uid: "",
  email: "",
  firstname: "",
  lastname: "",
  adress: "",
  city: "",
};

const authUserContext = createContext({
  authUser: init,
  authUserIsLoading: true,
});

interface Props {
  children: ReactNode;
}

export function AuthUserProvider({ children }: Props) {
  const auth = useAuthState();

  return (
    <authUserContext.Provider
      value={{
        authUser: auth.authUser as {
          uid: string;
          email: string;
          firstname: string;
          lastname: string;
          adress: string;
          city: string;
        },
        authUserIsLoading: auth.authUserIsLoading,
      }}
    >
      {children}
    </authUserContext.Provider>
  );
}

export const useAuth = ()=> useContext(authUserContext)
