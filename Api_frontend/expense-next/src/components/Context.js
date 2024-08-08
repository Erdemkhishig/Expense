"use client"
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const URL = "http://localhost:3001"
    const [userInfo, setUserInfo] = useState({ name: "ner", email: "mailaddress" })
    const [newCategory, setNewCategory] = useState({ name: "", icon: "", color: "" })
    // const [newCategory, setNewCategory] = useState({ name: "", icon: "", color: "" });
    const [allCategories, setAllCategories] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get(`${URL}/categories`);
            console.log(userInfo, newCategory, " +++++++");
            setAllCategories(response.data);
        } catch (error) {
            console.error("There was an error fetching the accounts!", error);
        }
    };


    useEffect(() => {
        getData()

    }, [])

    return (

        <UserContext.Provider value={{ userInfo, setUserInfo, newCategory, setNewCategory, getData, allCategories }}>
            {children}
        </UserContext.Provider>



    )

}