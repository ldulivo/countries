import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './helpers/List'
import SortByLetter from './helpers/SortByLetter'
import SortByContinent from './helpers/SortByContinent'
import { Button, Input, InputGroup } from 'reactstrap'

const Listall = ({ urlApi, vOnlyCountry }) => {
    const [countries, setCountries] = useState([])
    const [auxCountries, setAuxCountries] = useState([])
    const [orderActive, setOrderActive] = useState(2)
    const [order, setOrder] = useState('countryName')
    const [letter, setLetter] = useState('')
    const [continent, setContinent] = useState('')
    const [newSearch, setNewSearch] = useState('')

    /**
     * First get list all countries
     */
    useEffect(() => {
        axios
            .get(`${urlApi}/api`)
            .then(res => {
                setCountries(res.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /**
     * Function for order the list
     */
    const orderListBy = (
        { orderBy=order, orderByActive=orderActive, byLetter=letter, byContinent=continent }
    ) => {

        let fullURL = `${urlApi}/api${byContinent}?orderBy=${orderBy}${byLetter}`;

        axios
            .get( fullURL)
            .then(res => {
                setCountries(res.data)
            })
            setOrderActive(orderByActive)
            setOrder(orderBy)
            setLetter(byLetter)
            setContinent(byContinent)
    }

    /**
     * Button search country
     */
    const handleSearchCountry = (event) => {
        setNewSearch(event.target.value)
        searchByInitialLetter(event.target.value)
    }

    const searchByInitialLetter = (search = newSearch) => {
        /**
         * Clean auxCountries 
         */
        setAuxCountries([])
        
        /**
         * Map search matches in auxCountries
         */
        let aux = [];
        const numberOfCharacters = String(search).length
        
        countries.map( (country) => (
            ( String(country.countryName).substring(0,numberOfCharacters).toLowerCase() === String(search).toLowerCase() )
                ?
                aux.push(country)
                : null
            
        ));
        
        setAuxCountries(aux)
    }
    
    return (
        <>
        <div className='app--list-title'>
            <div>
                <h1>{
                    ( letter === '') 
                        ? "Complete list of countries"
                        : `Countries that start with the letter ${ String(letter).substr(11,1) }`
                    }
                </h1>
            </div>
            <div>
                <InputGroup>
                    <Input placeholder='country name' onChange={handleSearchCountry} value={newSearch} />
                    <Button>Search</Button>
                </InputGroup>
            </div>
        </div>

            <SortByLetter urlApi={urlApi} orderBy={orderListBy} letter={letter} />
            <br />
            <SortByContinent urlApi={urlApi} orderBy={orderListBy} continent={continent} />
            {(auxCountries.length === 0)
                ?<List countries={countries} orderBy={orderListBy} orderActive={orderActive} vOnlyCountry={vOnlyCountry} />
                :<List countries={auxCountries} orderBy={orderListBy} orderActive={orderActive} vOnlyCountry={vOnlyCountry} />
            }
            
        </>
    )
}

export default Listall
