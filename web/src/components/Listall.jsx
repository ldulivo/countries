import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './helpers/List'
import SortByLetter from './helpers/SortByLetter'
import SortByContinent from './helpers/SortByContinent'

const Listall = ({ urlApi, vOnlyCountry }) => {
    const [countries, setCountries] = useState([])
    const [orderActive, setOrderActive] = useState(2)
    const [order, setOrder] = useState('countryName')
    const [letter, setLetter] = useState('')
    const [continent, setContinent] = useState('')

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
    const orderListBy = (orderBy=order, orderByActive, byLetter=letter, byContinent=continent) => {

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
    
    return (
        <>
            <h1>Complete list of countries</h1>
            <SortByLetter urlApi={urlApi} orderBy={orderListBy} letter={letter} />
            <br />
            <SortByContinent urlApi={urlApi} orderBy={orderListBy} continent={continent} />
            <List countries={countries} orderBy={orderListBy} orderActive={orderActive} vOnlyCountry={vOnlyCountry} />
        </>
    )
}

export default Listall
