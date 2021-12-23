import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'reactstrap'

const ViewOnlyCountry = ({ urlApi, onlyCountry }) => {
const [country, setCountry] = useState('')
    /**
     * First get list all countries
     */
     useEffect(() => {
        axios
            .get(`${urlApi}/api?countryFind=${onlyCountry}`)
            .then(res => {
                setCountry(res.data[0])
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Table
                borderless
                dark
                responsive
                className='mt-3'
            >
                <thead>
                    <tr>
                        <th className='app--th-head'></th>
                        <th><h1>{country.countryName}</h1></th>
                    </tr>
                </thead>
            </Table>
            <Table
                borderless
                dark
                responsive
            >
                <tbody>
                    <tr>
                        <td className='app--td-body'></td>
                        <th className='app--th-body'>Capital</th>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>Continent Name</th>
                        <td>{country.continentName}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>Continent</th>
                        <td>{country.continent}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>Area In Sq Km</th>
                        <td>{ parseFloat(country.areaInSqKm).toLocaleString('en') }</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>Languages</th>
                        <td>{country.languages}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>Country Code</th>
                        <td>{country.countryCode}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>Currency Code</th>
                        <td>{country.currencyCode}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>Population</th>
                        <td>{ parseFloat(country.population).toLocaleString('en') }</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>Fips Code</th>
                        <td>{country.fipsCode}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>ISO Numeric</th>
                        <td>{country.isoNumeric}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>ISO Alpha3</th>
                        <td>{country.isoAlpha3}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>Geoname Id</th>
                        <td>{ parseFloat(country.geonameId).toLocaleString('en') }</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ViewOnlyCountry
