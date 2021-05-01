import React from 'react'
import spinner from '../../img/spinner.gif'
import SingleCharacter from './SingleCharacter'
export default function CharacterGrid({characters,isLoading}) {
    return (
        <React.Fragment>
            {isLoading &&<img src={spinner} alt=""/>}
            <section className="cards">
            {characters.map(char=> <SingleCharacter  key={char.char_id} item={char}/> )}
            </section>
        </React.Fragment>
    )
}
