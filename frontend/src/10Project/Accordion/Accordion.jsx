import React, { useState } from 'react'
import { data } from './data'

function Accordion() {
  const [api, setApi]=useState(data)
  const [select, setSelect]=useState(null)
  const handleButton=(id)=>{
    if (select==id) {
      setSelect(null)
    }
   else{
    setSelect(id)
   }
  }
  return (
    <div className='flex items-center flex-col'>
      <h1 className=''>Accordion</h1>
     {
        api.map((item, index)=>{
          return <div className='bg-white text-black w-1/2 mb-10 p-2 '>
            <div className=' flex gap-10 justify-between'><h1>{item.question}</h1>
            <button onClick={()=>handleButton(item.id)}>
              {select==item.id ? '-':'+' }
            </button>
            </div>
          {
            select==item.id &&   <div className='mt-4'>{item.answer}</div>
          }
          </div>
        })
      }
    </div>
  )
}

export default Accordion