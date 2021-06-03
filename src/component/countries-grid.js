import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

// countries grid layout
const  CountriesGrid = ({country}) => {


  const ls = (data , text) =>{
    //init an array to store it on local storage
    let visitedCountry;
    // check if the localstorage equal null or not
    if(localStorage.getItem(text) === null) {
        visitedCountry = []
    } else {
        visitedCountry = JSON.parse(localStorage.getItem(text))
    }
    // push the task to the taskes array
    visitedCountry.push(data)
    // set the item for localstorage
    localStorage.setItem(text , JSON.stringify(visitedCountry))
    }


  // state for the color and the text of the button
  const [color , setColor] = useState('secondary')
  const [text , setText] = useState('Visited')
  // change and set the state conditionally
  const visit = () =>{
    if(text === 'Visited'){
      setText('Not-Visited')
      setColor('primary')
    } else {
      setText('Visited')
      setColor('secondary')
    }
  }
 

//   const removels = (data) => {
//     let visited;
//     if(localStorage.getItem('visited') === null) {
//         visited = []
//     } else {
//       visited = JSON.parse(localStorage.getItem('visited'))
//     }

//     visited.forEach((visit, index) => {
//         if(data.name.textContent == visit.name){
//             visited.splice(index, 1)
//         }
//     })
//     localStorage.setItem('visited' , JSON.stringify(visited))
// }

  useEffect(()=> {
    if(text === 'Not-Visited'){
      ls(country , 'visited')
    }else {
      // removels(country) 
    }},[text])
 
  return (

    <Card  className='cards' style={{maxWidth: 305}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="country flag"
          height="180"
          image={country.flag}
          title="country flag"
        />
        <CardContent>
          <Box my={2}>
          <Typography gutterBottom variant="h5" component="h2">
           name: <span className="country-name">{country.name}</span> 
          </Typography>
          </Box>
          <Box my={2}>

          <Typography variant="body2" color="textSecondary" component="p">
           region: {country.region}
          </Typography>
          </Box>
          <Box my={2}>

          <Typography variant="body2" color="textSecondary" component="p">
          subregion: {country.subregion}
          </Typography>
          </Box>
          <Box my={2}>

          <Typography variant="body2" color="textSecondary" component="p">
           capital: {country.capital}
          </Typography>
          </Box>
          <Box my={2}>

          <Typography variant="body2" color="textSecondary" component="p">
           languages: {country.languages.map(lang => lang.name)}
          </Typography>
          </Box>
          <Box my={2}>

          <Typography variant="body2" color="textSecondary" component="p">
           population: {country.population}
          </Typography>
          </Box>
          <Box my={2}>

          <Typography variant="body2" color="textSecondary" component="p">
           currency: {country.currencies.map(currency => currency.name)}
          </Typography>
          </Box>
          <Box my={2}>
          <Typography variant="body2" color="textSecondary" component="p"> 
           Alphacode : {<span className='alpha2'>{country.alpha2Code}</span> } , { <span className='alpha3'>{country.alpha3Code}</span>}
           </Typography>
           </Box>
        </CardContent>
        </CardActionArea>
          <CardActions>
            <Button size="small" color={color} onClick={visit} className='visit'>
              {text}
            </Button>
            <Button size="small" color="primary">
              <Link style={{textDecoration:'none'}} to={`/${country.name}`}>
              Learn more
              </Link>   
            </Button>
          </CardActions>
    </Card>
  );
}

export default CountriesGrid
