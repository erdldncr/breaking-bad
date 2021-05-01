import React from 'react'
import Spinner from '../ui/Spinner'
import SingleCharacter from './SingleCharacter'
export default function CharacterGrid({characters,isLoading}) {
    return (
        <React.Fragment>
            {isLoading &&<Spinner/>}
            <section className="cards">
            {characters.map(char=> <SingleCharacter  key={char.char_id} item={char}/> )}
            </section>
        </React.Fragment>
    )
}
