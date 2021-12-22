import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'

const SortByLetter = ({ urlApi, letter, orderBy }) => {
    const [list, setList] = useState([])

    /**
     * First get list all countries
     */
     useEffect(() => {
        axios
            .get(`${urlApi}/api/list`)
            .then(res => {
                setList(res.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='SortByLetter'>
            <Button
                color= "primary"
                className={( '' === letter )? "active" : "" }
                outline
                size="sm"

                onClick={() => orderBy( 'countryName',2,``)}
            >
                ALL
            </Button>
            {
                list.map( (myLetter, index) => 
                    <Button
                        key={index}
                        color="primary"
                        className={( ( `&firstChar=${myLetter}` ) === letter )? "active" : "" }
                        outline
                        size="sm"

                        onClick={() => orderBy( 'countryName',2,`&firstChar=${myLetter}`)}
                    >
                        {myLetter}
                    </Button>
                )
            }
        </div>
    )
}

export default SortByLetter
