import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import * as K from '../Models/Constants'


function SelectPlace ( props ) {

    const [places, setPlaces] = React.useState ( [] ) 

    //npm install base-64
    const base64 = require('base-64');

    useEffect (() => {

        const user = JSON.parse(localStorage.getItem('auth'))

        var headers = new Headers();
        headers.append("Authorization", "Basic " + base64.encode(user.login + ":" + user.password));

        fetch( K.ADDRESS + '/api/places', {headers: headers})
        .then(response => response.json())
        .then( places => {
            setPlaces(places)
        })
        .catch( e => { 
          console.log(e)
        } )
      }, [])


    return  (<select onChange={props.onChange}>
            { places.length 
            ? 
            places. map ( (place, index) => {
                if (index === 0) {
                  return (<option selected={'selected'} value={place.id}> {place.title} </option>)
                } else {
                  return (<option value={place.id}> {place.title} </option>)
                }
            }
            )
            :
            <Loader />
            }     
            </select>
    )

}

export default SelectPlace