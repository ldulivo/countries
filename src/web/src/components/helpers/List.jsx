import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap'

const List = ({ countries, orderBy, orderActive, vOnlyCountry }) => {

    return (
        <>

        <Table striped size="sm" responsive>
                <thead>
                    <tr>
                        <th>
                            <Button
                                onClick={ () => orderBy({orderBy:'countryCode', orderByActive:1}) }
                                color={(orderActive===1)? "primary" : "secondary" }
                                size="sm"
                            >
                                Code
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy({orderBy:'countryName', orderByActive:2}) }
                                color={(orderActive===2)? "primary" : "secondary" }
                                size="sm"
                            >
                                Country
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy({orderBy:'capital', orderByActive:3}) }
                                color={(orderActive===3)? "primary" : "secondary" }
                                size="sm"
                            >
                                Capital
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy({orderBy:'continentName', orderByActive:4}) }
                                color={(orderActive===4)? "primary" : "secondary" }
                                size="sm"
                            >
                                Continent
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy({orderBy:'languages', orderByActive:5}) }
                                color={(orderActive===5)? "primary" : "secondary" }
                                size="sm"
                            >
                                Languages
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy({orderBy:'areaInSqKm', orderByActive:6}) }
                                color={(orderActive===6)? "primary" : "secondary" }
                                size="sm"
                            >
                                Area In Sq Km
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy({orderBy:'geonameId', orderByActive:7}) }
                                color={(orderActive===7)? "primary" : "secondary" }
                                size="sm"
                            >
                                Geoname Id
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy({orderBy:'isoNumeric', orderByActive:8}) }
                                color={(orderActive===8)? "primary" : "secondary" }
                                size="sm"
                            >
                                ISO Nº
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy({orderBy:'population', orderByActive:9}) }
                                color={(orderActive===9)? "primary" : "secondary" }
                                size="sm"
                            >
                                Population
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    countries.map( (country, index) =>
                    <tr key={index}>
                        <td>{country.countryCode}</td>

                        <th
                            onClick={ () => vOnlyCountry(country.countryName)}
                        >
                            <Link to='/country'>
                                {country.countryName.substr(0,42)}
                            </Link>
                        </th>

                        <td>{country.capital.substr(0,20)}</td>
                        <td>{country.continentName.substr(0,15)}</td>
                        <td>{country.languages.substr(0,5)}</td>
                        <td>{country.areaInSqKm}</td>
                        <td>{country.geonameId}</td>
                        <td>{country.isoNumeric}</td>
                        <td>{country.population}</td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </>
    )
}

export default List
