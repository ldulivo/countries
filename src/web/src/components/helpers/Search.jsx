import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({ auxSearch, vOnlyCountry }) => {
    return (
        <div className={(auxSearch.length >= 10 )?'app--list-search app--list-search-scroll'  : 'app--list-search'}>
            {
                auxSearch.map( ( search, index ) =>
                    <p
                        key={index}
                        onClick={ () => vOnlyCountry(search.countryName) }
                        className='text-danger'
                    >
                        <Link to='/country'>
                            { search.countryName }
                        </Link>
                    </p>
                )
            }
        </div>
    )
}

export default Search
