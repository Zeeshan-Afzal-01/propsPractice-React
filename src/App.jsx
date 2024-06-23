import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Input from './components/input/Input'
import Button from './components/buttons/Button'
import Display from './components/display/Display'
function App() {

const [value,setvalue]=useState('');
const [display,setDisplay]=useState('');
function textManulplation(event){

  switch (event){

    case 1:
      setDisplay(value.toUpperCase());
      break;
    case 2:
      setDisplay(value.toLowerCase());
      break;
    case 3:
      const numbers = value.match(/\d+/g);
      setDisplay(numbers ? numbers.join(', ') : 'No numbers found');
      break;
    case 4:
      const emails = value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi);
      setDisplay(emails ? emails.join(', ') : 'No emails found');
      break;
    case 5:
      setDisplay('');
      
      break;
    default:
        break;
        
  }

}
  return (

    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="container p-5 d-flex flex-column align-items-center justify-content-center">
        <Input setInputValue={setvalue}/>
        <Button value={textManulplation}/>
        <Display displayValue={display} />
        
      </div>
    </div>

  )
}

export default App
