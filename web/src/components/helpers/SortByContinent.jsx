import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'

const SortByContinent = ({ urlApi, continent, orderBy }) => {
    const [list, setList] = useState([])

    /**
     * First get list all countries
     */
     useEffect(() => {
        axios
            .get(`${urlApi}/api/list?search=continentName`)
            .then(res => {
                setList(res.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='SortByLetter'>
            <Button
                color= "primary"
                className={( '' === continent )? "active" : "" }
                outline
                size="sm"

                onClick={() => orderBy( 'countryName',2,``, ``)}
            >
                ALL
            </Button>
            {
                list.map( (myContinent, index) => 
                    <Button
                        key={index}
                        color="primary"
                        className={( ( `/continent/${myContinent}` ) === continent )? "active" : "" }
                        outline
                        size="sm"

                        onClick={() => orderBy( 'countryName',2,``, `/continent/${myContinent}`)}
                    >
                        {myContinent}
                    </Button>
                )
            }
        </div>
    )
}

export default SortByContinent
