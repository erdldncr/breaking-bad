import React from 'react'
import spinner from '../../img/spinner.gif'
const style={
    margin:'auto',
    display:'block',
    width:'200px'
}
const Spinner = () => {
    return (
        <img src={spinner} style={style} alt=""/>
    )
}

export default Spinner
