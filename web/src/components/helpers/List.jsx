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
                                onClick={ () => orderBy('countryCode', 1) }
                                color={(orderActive===1)? "primary" : "secondary" }
                                size="sm"
                            >
                                Code
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy('countryName', 2) }
                                color={(orderActive===2)? "primary" : "secondary" }
                                size="sm"
                            >
                                Country
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy('capital', 3) }
                                color={(orderActive===3)? "primary" : "secondary" }
                                size="sm"
                            >
                                Capital
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy('continentName', 4) }
                                color={(orderActive===4)? "primary" : "secondary" }
                                size="sm"
                            >
                                Continent
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy('languages', 5) }
                                color={(orderActive===5)? "primary" : "secondary" }
                                size="sm"
                            >
                                Languages
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy('areaInSqKm', 6) }
                                color={(orderActive===6)? "primary" : "secondary" }
                                size="sm"
                            >
                                Area In Sq Km
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy('geonameId', 7) }
                                color={(orderActive===7)? "primary" : "secondary" }
                                size="sm"
                            >
                                Geoname Id
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy('isoNumeric', 8) }
                                color={(orderActive===8)? "primary" : "secondary" }
                                size="sm"
                            >
                                ISO Nº
                            </Button>
                        </th>
                        <th>
                            <Button
                                onClick={ () => orderBy('population', 9) }
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
