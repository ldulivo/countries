import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './helpers/List'

const Listall = ({ urlApi, vOnlyCountry }) => {
    const [countries, setCountries] = useState([])
    const [orderActive, setOrderActive] = useState(2)

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
    const orderListBy = (orderBy, orderByActive) => {
        axios
            .get(`${urlApi}/api?orderBy=${orderBy}`)
            .then(res => {
                setCountries(res.data)
            })
            setOrderActive(orderByActive)
    }
    
    return (
        <>
            <h1>Complete list of countries</h1>
            <List countries={countries} orderBy={orderListBy} orderActive={orderActive} vOnlyCountry={vOnlyCountry} />
        </>
    )
}

export default Listall
