import React from 'react'


function Countries ( props ) {

    return (

        <div className='container'>
            <ul className="list-group w-100">

            { 
            
                props.countries.map ( (country, index) => {

                    return <li className="list-group-item w-100" key={index} >
                        <span> { country.title } </span>
                    </li>

                    } )
                }

            </ul>

        </div>
    )

}
export default Countries