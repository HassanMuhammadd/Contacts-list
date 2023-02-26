import React from 'react'
import {recentContacts} from './App'
import RecentContact from './RecentContact'

export default function RecentContacts() {
    return (
	<div className='m-0'>
	<div className="recentContactsText px-3 py-2  "> Latest Contacts</div>

		<RecentContact/>
	</div>
    )
}
