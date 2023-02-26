import React, {useState} from 'react'
import './App.css';
import {allContacts} from './App';


export default function AddContact({saveAdd}) {
	const [firstName,setFirstName]=useState("");
	const [lastName,setLastName]=useState("");
	const [email,setEmail]=useState("");
	const [number,setNumber]=useState("");

	const handleAdding=(e)=>{
		e.preventDefault();
		const user={
			firstName:firstName,
			lastName:lastName,
			email:email,
			mobileNumber:number,
			userId:new Date().getMilliseconds(),
		}
		allContacts.push(user);
		saveAdd();
		//console.log(allContacts);
	}

	const handleCancel=(e)=>{
		e.preventDefault()
		saveAdd();
	}

    return (
	<div className='text-center addContact rounded-3'>
		<h4 className='py-3 my-4'>Add a new Contact</h4>
		<form className='d-flex flex-column align-items-center addContactForm'>

			<input
			type="text"
			placeholder='First Name'
			className='w-75 px-3 py-2 mx-3'
			required
			value={firstName}
			onChange={(e)=>{let val = e.target.value.replace(/[^A-Za-z]/ig, ''); setFirstName(val)}}
			></input>

			<input
			type="text"
			placeholder='Last Name'
			className='w-75 px-3 py-2 mx-3 my-3'
			value={lastName}
			onChange={(e)=>{let val = e.target.value.replace(/[^A-Za-z]/ig, ''); setLastName(val)}}
			></input>
			<input
			type="number"
			placeholder='Phone Number'
			className='w-75 px-3 py-2 mx-3'
			required
			value={number}
			onChange={(e)=>setNumber(e.target.value)}
			></input>

			<input
			type="text"
			placeholder='Email Address'
			className='w-75 px-3 py-2 mx-3 my-3'
			value={email}
			onChange={(e)=>setEmail(e.target.value)}
			></input>
			<button type="submit" className='w-25 py-3 rounded-3 mt-5 add ' onClick={handleAdding}>Add Contact</button>
			<button className='w-25 py-3 rounded-3 mt-3 mb-5 cancel' onClick={handleCancel}>Cancel</button>

		</form>
	</div>
    )
}
