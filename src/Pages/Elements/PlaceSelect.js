import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import * as K from '../Models/Constants'
import Cookies from 'universal-cookie';


function SelectPlace ( props ) {

    const [places, setPlaces] = React.useState ( [] ) 
    const cookies = new Cookies();

    useEffect (() => {

      const token = cookies.get('accessToken')

        var headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);

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