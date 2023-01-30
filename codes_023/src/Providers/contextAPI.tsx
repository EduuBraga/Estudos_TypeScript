import React, { createContext, useState } from "react";

interface User {
  nameUser: string,
  setNameUser: any
}

export const UserContext = createContext<User | null>(null)

export const UserProvider = ({children}: any) => {
  const [ nameUser, setNameUser] = useState('dudu')

  const valueContext: User = {
    nameUser,
    setNameUser
  }

  return (
    <UserContext.Provider value={valueContext}>
      {children}
    </UserContext.Provider>
  )
}