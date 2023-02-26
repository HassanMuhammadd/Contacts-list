import React, {useState} from 'react'
import RecentContacts from './RecentContacts'
import Contacts from './Contacts'
import {allContacts} from './App';
import EachContact from './EachContact';


export default function List({toggleAdd}) {
	const [search,setSearch] = useState("");

	const handleSearch=(e)=>{
		setSearch(e.target.value)
	}

	const filtered = allContacts.filter(contact=>{
		return (contact.firstName.toLowerCase().includes(search.toLowerCase()))

	})
    return (
		<>
		<div className="searchContainer p-2">
			{/* text field to search for contacts */}

		<input type="text"
		placeholder='Search Contacts...'
		className='contactSearch w-100 py-2 rounded-5 '
		onChange={handleSearch}
		></input>
	</div>

	{/* Scrollable part */}
	<div style={{overflowY: 'scroll', height:'70vh'}}>

		{/* button to add a new contact */}
		{search.length===0? <div className="d-flex flex-row justify-content-between p-3 toAddNew m-0"
		onClick={toggleAdd}>
		<span className='fw-bold addContactText '>Add New Contacts</span>
		<span className='plus fw-bolder fs-5'>+</span>
		</div>:""}

		{/* Latest contacts */}
		{search.length===0?<RecentContacts/>:""}

		{/* Contacts */}
		{search.length===0?<Contacts/>:""}

		{/* Searching in the contacts list */}
		{search.length>0?
		filtered.map(contact=>{
			return <EachContact contact={contact}/>
		})
		:""}
	</div>
		</>
    )
}
