"use client"

import { useState, useEffect } from 'react'

import { Register } from '../components/Register';
import axios from 'axios';


export default function Home() {
  const [accounts, setAccounts] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");


useEffect(() => {
 const getData = async () => {
  const response = await axios.get("http://localhost:3001/accounts");
  setAccounts(response.data);
  
 };
 getData()

}, []);

const createAccount = async () => {
  const newAccount = {
    title,
    amount,
  };

  const response = await axios.post("http://localhost:3001/accounts",
  newAccount
);
setAccounts([...accounts, response.data]);
};

  return (
    <main >
      
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
          onChange={(event) =>{
            setTitle(event.target.value);
          }}/>
          
          <input className='border'
          value={amount}
          onChange={(event) =>{
            setAmount(event.target.value);
          }}/>

        </div>

        <button onClick={createAccount}>create</button>

      </div>
      <Register />
      

    </main>
  );
}
