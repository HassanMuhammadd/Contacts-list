import React from 'react'
import {recentContacts} from './App'
export default function RecentContact() {
    return (
		recentContacts.map((contact)=>
		<div className="contact d-flex flex-row justify-content-start ps-3 py-2" key={contact.contactId}>


		<div className="text d-flex flex-column justify-content-center ">
			<span className='name'>{contact.firstName} {contact.lastName}</span>
			<span className='phoneNumber opacity-50'>{contact.mobileNumber}</span>
		</div>
		</div>
		)

    )
}
