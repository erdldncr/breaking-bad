import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './App.css';
import Header  from './components//ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search';
const url='https://www.breakingbadapi.com/api/characters'
function App() {
const [characters,setCharacters]=useState([])
const [isLoading, setIsLoading]=useState(true)
const [query,setQuery]=useState('')
  useEffect(()=>{
    axios.get('https://www.breakingbadapi.com/api/characters?name='+query)
    .then(res=>{
      console.log(res.data)
      setCharacters(res.data)
      setIsLoading(false)
    })
  },[query])
 
  return (
    <div className="container">
      <Header/>
      <Search  setQuery={setQuery}/>
      <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
