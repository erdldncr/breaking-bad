import React,{useState} from 'react'

const Search = ({setQuery}) => {
    const [name,setName]=useState('')
   const handleChange=(value)=>{
    
    setName(value)   
    setQuery(name)
   }
    return (
        <section className='search'>
            <form  >
                <input type="text"
                value={name}
                onChange={(e)=>handleChange(e.target.value)}
                className='form-control' placeholder='Search Characters'
                />
            </form>
        </section>
    )
}

export default Search
