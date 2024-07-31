"use client"
import { useContext } from 'react';
const { createContext, useState} = require("react")

export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({name : "ner", email : "mailaddress"})
    return(

        <UserContext.Provider value={{userInfo, setUserInfo}}>
        {children}
       </UserContext.Provider>



    )

}