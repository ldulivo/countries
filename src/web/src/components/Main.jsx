import React from 'react'
import Spinners from './helpers/Spinners'

const Main = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <h3>In the 'list all' section of the menu, find a complete list of countries.</h3>
            <h3>By choosing a country, you can see its position on the map and the weather.</h3>
            <Spinners />
        </div>
    )
}

export default Main
