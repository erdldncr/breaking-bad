import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './App.css';
import Header  from './components//ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
const url='https://www.breakingbadapi.com/api/characters'
function App() {
const [characters,setCharacters]=useState([])
const [isLoading, setIsLoading]=useState(true)
  useEffect(()=>{
    axios.get(url)
    .then(res=>{
      console.log(res.data)
      setCharacters(res.data)
      setIsLoading(false)
    })
  },[])
  return (
    <div className="container">
      <Header/>
      <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
