import React from 'react'
import CountriesGrid from './countries-grid'
import Load from './Load'



const Countries = ({ countries, isLoading}) => {
   
   // check for the data if it loaded or not
    return isLoading ? (    
     <Load />
    ) : (
        <>
            {countries.map((country) => (
                <CountriesGrid key={country.name} country={country}></CountriesGrid>
            ))}
       
        </>
    )
   
  
}

export default Countries
