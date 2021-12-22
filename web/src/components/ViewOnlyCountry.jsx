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
    console.log(country);

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
                        <th>continentName</th>
                        <td>{country.continentName}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>continent</th>
                        <td>{country.continent}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>areaInSqKm</th>
                        <td>{country.areaInSqKm}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>languages</th>
                        <td>{country.languages}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>countryCode</th>
                        <td>{country.countryCode}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>currencyCode</th>
                        <td>{country.currencyCode}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>population</th>
                        <td>{country.population}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>fipsCode</th>
                        <td>{country.fipsCode}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>isoNumeric</th>
                        <td>{country.isoNumeric}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>isoAlpha3</th>
                        <td>{country.isoAlpha3}</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <th>geonameId</th>
                        <td>{country.geonameId}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ViewOnlyCountry
