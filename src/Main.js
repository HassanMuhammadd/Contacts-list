import React, {useState} from 'react'

import List from './List';
import AddContact from './AddContact';

export default function Main() {
	const [adding,setAdding] = useState(false);
	const toggleAdd=()=>{
		setAdding(true)
	}
	const saveAdd=()=>{
		setAdding(false)
	}
    return (

		<div className="main d-flex flex-column  mx-auto my-5 w-50">
		{!adding?
		<List toggleAdd={toggleAdd}/>
		:<AddContact saveAdd={saveAdd}/>
	}


		</div>


    )
}
