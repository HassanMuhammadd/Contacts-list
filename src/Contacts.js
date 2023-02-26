import React from 'react'
import {allContacts} from './App'
import EachContact from './EachContact';

export default function Contacts() {
	const a = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='A'
	})
	const b = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='B'
	})
	const c = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='C'
	})
	const d = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='D'
	})
	const e = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='E'
	})
	const f = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='F'
	})
	const g = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='G'
	})
	const h = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='H'
	})
	const i = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='I'
	})
	const j = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='J'
	})
	const k = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='K'
	})
	const l = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='L'
	})
	const m = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='M'
	})
	const n = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='N'
	})
	const o = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='O'
	})
	const p = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='P'
	})
	const q = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='Q'
	})
	const r = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='R'
	})
	const s = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='S'
	})
	const t = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='T'
	})
	const u = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='U'
	})
	const v = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='V'
	})
	const w = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='W'
	})
	const x = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='X'
	})
	const y = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='Y'
	})
	const z = allContacts.filter(contact=>{
		return contact.firstName.charAt(0).toUpperCase()==='Z'
	})
    return (
	<div>

{
			a.length>0?<p className='letter ps-3 fw-bold mb-0'>A</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='A'?<EachContact contact={contact}/>:""

		})}

{
			b.length>0?<p className='letter ps-3 fw-bold mb-0'>B</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='B'?<EachContact contact={contact}/>:""

		})}

{
			c.length>0?<p className='letter ps-3 fw-bold mb-0'>C</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='C'?<EachContact contact={contact}/>:""

		})}

{
			d.length>0?<p className='letter ps-3 fw-bold mb-0'>D</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='D'?<EachContact contact={contact}/>:""

		})}

{
			e.length>0?<p className='letter ps-3 fw-bold mb-0'>E</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='E'?<EachContact contact={contact}/>:""

		})}

{
			f.length>0?<p className='letter ps-3 fw-bold mb-0'>F</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='F'?<EachContact contact={contact}/>:""

		})}

{
			g.length>0?<p className='letter ps-3 fw-bold mb-0'>G</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='G'?<EachContact contact={contact}/>:""

		})}

{
			h.length>0?<p className='letter ps-3 fw-bold mb-0'>H</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='H'?<EachContact contact={contact}/>:""

		})}

{
			i.length>0?<p className='letter ps-3 fw-bold mb-0'>I</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='I'?<EachContact contact={contact}/>:""

		})}

{
			j.length>0?<p className='letter ps-3 fw-bold mb-0'>J</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='J'?<EachContact contact={contact}/>:""

		})}

{
			k.length>0?<p className='letter ps-3 fw-bold mb-0'>K</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='K'?<EachContact contact={contact}/>:""

		})}

{
			l.length>0?<p className='letter ps-3 fw-bold mb-0'>L</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='L'?<EachContact contact={contact}/>:""

		})}

{
			m.length>0?<p className='letter ps-3 fw-bold mb-0'>M</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='M'?<EachContact contact={contact}/>:""

		})}

{
			n.length>0?<p className='letter ps-3 fw-bold mb-0'>N</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='N'?<EachContact contact={contact}/>:""

		})}

{
			o.length>0?<p className='letter ps-3 fw-bold mb-0'>O</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='O'?<EachContact contact={contact}/>:""

		})}

{
			p.length>0?<p className='letter ps-3 fw-bold mb-0'>P</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='P'?<EachContact contact={contact}/>:""

		})}

{
			q.length>0?<p className='letter ps-3 fw-bold mb-0'>Q</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='Q'?<EachContact contact={contact}/>:""

		})}

{
			r.length>0?<p className='letter ps-3 fw-bold mb-0'>R</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='R'?<EachContact contact={contact}/>:""

		})}

{
			s.length>0?<p className='letter ps-3 fw-bold mb-0'>S</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='S'?<EachContact contact={contact}/>:""

		})}

{
			t.length>0?<p className='letter ps-3 fw-bold mb-0'>T</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='T'?<EachContact contact={contact}/>:""

		})}

{
			u.length>0?<p className='letter ps-3 fw-bold mb-0'>U</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='U'?<EachContact contact={contact}/>:""

		})}

{
			v.length>0?<p className='letter ps-3 fw-bold mb-0'>V</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='V'?<EachContact contact={contact}/>:""

		})}

{
			w.length>0?<p className='letter ps-3 fw-bold mb-0'>W</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='W'?<EachContact contact={contact}/>:""

		})}

{
			x.length>0?<p className='letter ps-3 fw-bold mb-0'>X</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='X'?<EachContact contact={contact}/>:""

		})}

{
			y.length>0?<p className='letter ps-3 fw-bold mb-0'>Y</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='Y'?<EachContact contact={contact}/>:""

		})}

{
			z.length>0?<p className='letter ps-3 fw-bold mb-0'>Z</p>:""
		}
		{allContacts.map(contact=>{
			return contact.firstName.charAt(0).toUpperCase()==='Z'?<EachContact contact={contact}/>:""

		})}
	</div>
    )
}
