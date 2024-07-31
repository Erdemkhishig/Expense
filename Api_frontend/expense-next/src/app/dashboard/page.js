"use client"

import { useState, useEffect } from 'react'

import axios from 'axios';

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Aside } from "@/components/Aside";
import { Main } from "@/components/Main";


export default function Dashboard() {

    const [accounts, setAccounts] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");


    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("http://localhost:3000/accounts");
            setAccounts(response.data);

        };
        getData()

    }, []);

    const createAccount = async () => {
        const newAccount = {
            title,
            amount,
            category,
            time,
        };

        const response = await axios.post("http://localhost:3000/accounts",
            newAccount
        );
        setAccounts([...accounts, response.data]);
    };

    return (
        <main>
            <div className="px-4 max-w-screen-2xl m-auto ">
                <Navbar />
                <div className="bg-gray-100 h-full flex py-8 gap-4 px-24">
                    <Aside />
                    <div className="ml-8 w-full"><Main accounts={accounts} />
                        <div>
                            <p>Account</p>
                            {accounts.map((account, index) => (
                                <li key={account.title + index}>
                                    {account.title} - {account.amount}
                                </li>
                            ))}

                            <div className='flex gap-4 p-6'>
                                <input className='border'
                                    value={title}
                                    placeholder='title'
                                    onChange={(event) => {
                                        setTitle(event.target.value);
                                    }} />

                                <input className='border'
                                    value={amount}
                                    placeholder='amount'
                                    onChange={(event) => {
                                        setAmount(event.target.value);
                                    }} />

                                <input className='border'
                                    value={category}
                                    placeholder='category'
                                    onChange={(event) => {
                                        setCategory(event.target.value);
                                    }} />
                                <input className='border'
                                    value={time}
                                    placeholder='time'
                                    onChange={(event) => {
                                        setTime(event.target.value);
                                    }} />

                            </div>

                            <button onClick={createAccount}>create</button>

                        </div>
                    </div>

                </div>

            </div>

        </main>
    );
}
