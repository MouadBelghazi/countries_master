import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Countries from './component/countries';
import Header from './component/Header';
import Searching from './component/Search';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Country from './component/country';
import Visited from './component/visited';


const App = () => {

//  usestate hook to update the state whenever need to
const [countries , SetCountries] = useState([])
const [isLoading, setIsLoading] = useState(true)



// useEffect to get data when the page upload []
  useEffect( () =>{
    // fetchData func
   const fetchData = async () => {
    //  getData using axios and async await syntax 
    setIsLoading(true)
    const result = await axios(`https://restcountries.eu/rest/v2/all`)
    SetCountries(result.data)
    setIsLoading(false)
    }
  
    // call the fetch data function
    fetchData()
  },[])

  return (
    <Router>
      <Header />
      <Switch>
      <Route path = '/' exact>
        <Searching countries={countries}/>     
        <div className='grid' >
        <Countries isLoading={isLoading} countries={countries}></Countries>
        </div>
      </Route>
      <Route path='/visited' >
      <div className='grid' >
        <Visited />
        </div>
      </Route>
      <Route path='/:name' >
        <Country />
      </Route>
  
      </Switch>
    </Router>
  );
}

export default App;