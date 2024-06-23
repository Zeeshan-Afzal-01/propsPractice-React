import React from 'react'

export default function Button({value}) {
const sendHandle=(number)=>{
 value(number);
}

  return (
    <div className="buttonContainer my-5 w-100 p-2 d-flex align-items-center justify-content-around">
        <button onClick={()=>{sendHandle(1)}} className='btn btn-primary'>UpperCase</button>
        <button onClick={()=>{sendHandle(2)}} className='btn btn-primary'>LowerCase</button>
        <button onClick={()=>{sendHandle(3)}} className='btn btn-primary'>Find Number</button>
        <button onClick={()=>{sendHandle(4)}} className='btn btn-primary'>Find Email</button>
        <button onClick={()=>{sendHandle(5)}} className='btn btn-primary'>Clear</button>
    </div>
  )
}
