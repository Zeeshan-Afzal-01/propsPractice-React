import React from 'react'
import Styles from './input.module.css'

export default function Input({setInputValue}) {

const changeHandle=(event)=>{
  setInputValue(event.target.value);
}
  return (
    <div className={`d-flex align-items-center justify-content-center ${Styles.inputContainer}`}>
    <p className='mx-3 mt-3'>Enter the input: </p>
   <input onChange={changeHandle} type="text" />
   </div>
  )

}
