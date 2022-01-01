import React,{useState} from 'react'
import { EasySearch } from 'easy-react-search'
import 'easy-react-search/dist/index.css'
const App = () => {
  const [choosedValue,setChoosedValue] = useState(''); 
  const [enteredValue,setOnEnterPress] = useState('');
  return (
    <EasySearch dataString='one,two,three,four,five,six,seven' setChoosedValue={setChoosedValue} setOnEnterPress={setOnEnterPress}/>
  )
}

export default App
