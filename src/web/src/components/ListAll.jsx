import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './helpers/List'
import SortByLetter from './helpers/SortByLetter'
import SortByContinent from './helpers/SortByContinent'
import { Input, InputGroup } from 'reactstrap'
import Search from './helpers/Search'

const Listall = ({ urlApi, vOnlyCountry }) => {
    const [countries, setCountries] = useState([])
    const [auxCountries, setAuxCountries] = useState([])
    const [orderActive, setOrderActive] = useState(2)
    const [order, setOrder] = useState('countryName')
    const [letter, setLetter] = useState('')
    const [continent, setContinent] = useState('')
    const [newSearch, setNewSearch] = useState('')
    const [auxSearch, setAuxSearch] = useState([])

    /**
     * First get list all countries
     */
    useEffect(() => {
        axios
            .get(`${urlApi}/api`)
            .then(res => {
                setCountries(res.data)
                setAuxCountries(res.data)
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

    const searchByInitialLetter = (auxSearch = newSearch) => {
        
        let aux = [];
        const numberOfCharacters = String(auxSearch).length
        
        auxCountries.map( (country) => (
            ( String(country.countryName).substring(0,numberOfCharacters).toLowerCase() === String(auxSearch).toLowerCase() )
                ?
                aux.push(country)
                : null
            
        ));
        
        if( numberOfCharacters === 0){
            setAuxSearch([])
        } else {
            setAuxSearch(aux)
        }
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
                </InputGroup>
            </div>
            {( auxSearch.length === 0 )
                ? null
                :<Search auxSearch={auxSearch} vOnlyCountry={vOnlyCountry} />
            }
        </div>

            <SortByLetter urlApi={urlApi} orderBy={orderListBy} letter={letter} />
            <br />
            <SortByContinent urlApi={urlApi} orderBy={orderListBy} continent={continent} />
            <List countries={countries} orderBy={orderListBy} orderActive={orderActive} vOnlyCountry={vOnlyCountry} />
            
        </>
    )
}

export default Listall
