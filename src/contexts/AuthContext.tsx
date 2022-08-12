import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>; 
}

type SignInProps = {
  email: string;
  password: string;
}

type UserProps = {
  id: string;
  name:  string;
  email: string;
}

type AuthProviderData = {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderData){
  
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps){
    alert(email + password)
  }
  
  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}