import React, { useState } from 'react'
import { data } from './data'

function Multip() {
  const [api, setApi]=useState(data)
  const [select, setSelect]=useState([])
  const handleButton=(id)=>{
    if (select.includes(id)) {
      setSelect(select.filter((d)=>d!=id))
    }
   else{
    setSelect([...select, id])
   }
  }
  return (
    <div className='flex items-center flex-col'>
      <h1 className='mb-3'>Multiple Accordion</h1>
     {
        api.map((item, index)=>{
          return <div className='bg-white text-black w-1/2 mb-10 p-2 '>
            <div className=' flex gap-10 justify-between'><h1>{item.question}</h1>
            <button onClick={()=>handleButton(item.id)} className=''>
              {select==item.id ? '-':'+' }
            </button>
            </div>
          {
            select.includes(item.id) &&   <div className='mt-4'>{item.answer}</div>
          }
          </div>
        })
      }
    </div>
  )
}

export default Multip