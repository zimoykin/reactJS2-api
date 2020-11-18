import React, { useEffect, useState } from 'react'
import * as K from '../Pages/Models/Constants'
import Loader from './Elements/Loader'
import AlertError from './Elements/ErrorAlert'
import { Redirect } from "react-router-dom";
import App from '../App'
import { Prev } from 'react-bootstrap/esm/PageItem'
import Cookies from 'universal-cookie';
import Countries from './Lists/Countries'



function CountriesPage () {

    const cookies = new Cookies();
    const token = cookies.get ('accessToken')

    const [countries, setCountries] = useState ( [] )

    useEffect( () => {
        
        const headers = new Headers();
        headers.append ('Authorization', `Bearer ${token}`)

        fetch(`${K.ADDRESS}/api/countries`)
            .then (response => response.json())
            .then (countries => {
                setTimeout( () => {
                    setCountries(countries)
                }, K.TIMEOUT)
            })


    }, [] )



    return (
        !cookies.get('accessToken')
        ?
        <Redirect to="/login" />
        :
        <div className='container'>

            { countries.length ? <Countries countries={countries}/> : <Loader /> }

        </div>
    )

}
export default CountriesPage