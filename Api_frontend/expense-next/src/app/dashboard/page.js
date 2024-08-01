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
    const URL = "http://localhost:3001"


    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`${URL}/accounts`);
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

        const response = await axios.post(`${URL}/accounts`,
            newAccount
        );
        setAccounts([...accounts, response.data]);
    };

    const deleteAccount = async (accountId) => {
        try {
            await axios.delete(`${URL}/accounts/${accountId}`);
            setAccounts(accounts.filter(account => account.id !== accountId));
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    return (
        <main>
            <div className="px-4 max-w-screen-2xl m-auto ">
                <Navbar />
                <div className="bg-gray-100 h-full flex py-8 gap-4 px-24">
                    <Aside accounts={accounts} />
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
                            <div className='flex flex-col gap-4'>
                                <button className="border-2" onClick={createAccount}>create</button>
                                <button className='border-2'>delete</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </main>
    );
}
