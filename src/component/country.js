import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Card, CardMedia, Grid, Paper , CardContent ,Typography} from '@material-ui/core'

const Country = () => {
   // country state and parameter of the url
    const [country, setCountry] = useState([])
    const {name} = useParams()

    useEffect(() => {
           // fetchData func
        const fetchCountryData = async () => {
            //  getData using axios and async await syntax      
            const result = await axios(`https://restcountries.eu/rest/v2/name/${name}`)
            setCountry(result.data)
            }      
            // call the fetch data function
            fetchCountryData()
    },[])
    return (
        <Fragment>
            {country.map(c => {
                const {alpha2Code, alpha3Code ,borders,capital ,currencies,flag ,languages,name,nativeName,region,population ,subregion,numericCode,latlng} = c
           return (
            <Grid container key={numericCode}>
           <Grid item md={12} >
            <Paper elevation={3} style={{}}>
                    <Card>
                       <Grid container>

                        <Grid item md={4}>
                        <CardMedia>
                        <img src={flag}
                            alt="flag"
                            style={{width: '100%'}}
                            />
                        </CardMedia>
                        </Grid>
                        <Grid item md={8}>
                        <CardContent className='text-center' >
                            {name}
                        </CardContent>
                        <CardContent >
                         <div className="flex" >
                          <Typography variant="body2" color="textSecondary" component="p">
                            Alphacode : {<span>{alpha2Code}</span> } , { <span>{alpha3Code}</span>}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            borders : { borders.map((border) => <span> {border} ,</span> )}
                          </Typography>
                          </div>
                        </CardContent>
                        <CardContent >
                         <div className="flex" >
                          <Typography variant="body2" color="textSecondary" component="p">
                            Capital : { capital} 
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          currencies : { currencies.map((curr) => <span> {curr.name} .</span> )}
                          </Typography>
                          </div>
                        </CardContent>
                        <CardContent >
                         <div className="flex" >
                          <Typography variant="body2" color="textSecondary" component="p">
                            languages : { languages.map((lang) => <span> {lang.name} .</span> )}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            nativName : {nativeName}
                          </Typography>
                          </div>
                        </CardContent>
                        <CardContent >
                         <div className="flex" >
                          <Typography variant="body2" color="textSecondary" component="p">
                            region : { region } , subregion : { subregion }
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            population : {population}
                          </Typography>
                          </div>
                        </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                    </Paper>        
            </Grid>
            </Grid>
           )
         })}
        </Fragment>
    )
}

export default Country
