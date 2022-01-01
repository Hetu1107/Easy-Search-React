import React,{useState} from 'react'
import { EasySearch } from 'easy-react-search'
import 'easy-react-search/src/style/search.css'
const App = () => {
  const [choosedValue,setChoosedValue] = useState(''); 
  const [enteredValue,setOnEnterPress] = useState('');
  return (
    <EasySearch dataString='hetu,patel,mahesh' setChoosedValue={setChoosedValue} setOnEnterPress={setOnEnterPress}/>
  )
}

export default App
