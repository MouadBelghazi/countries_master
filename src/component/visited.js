import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';


const Visited = () => {
    const visite = JSON.parse(localStorage.getItem('visited'))
    return  (
        <>
            {visite && visite.map((vis) => (
                 <Card  className='cards' style={{maxWidth: 305}} >
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     alt="vis flag"
                     height="180"
                     image={vis.flag}
                     title="vis flag"
                   />
                   <CardContent>
                     <Box my={2}>
                     <Typography gutterBottom variant="h5" component="h2">
                      name: <span className="vis-name">{vis.name}</span> 
                     </Typography>
                     </Box>
                     <Box my={2}>
           
                     <Typography variant="body2" color="textSecondary" component="p">
                      region: {vis.region}
                     </Typography>
                     </Box>
                     <Box my={2}>
           
                     <Typography variant="body2" color="textSecondary" component="p">
                     subregion: {vis.subregion}
                     </Typography>
                     </Box>
                     <Box my={2}>
           
                     <Typography variant="body2" color="textSecondary" component="p">
                      capital: {vis.capital}
                     </Typography>
                     </Box>
                     <Box my={2}>
           
                     <Typography variant="body2" color="textSecondary" component="p">
                      languages: {vis.languages.map(lang => lang.name)}
                     </Typography>
                     </Box>
                     <Box my={2}>
           
                     <Typography variant="body2" color="textSecondary" component="p">
                      population: {vis.population}
                     </Typography>
                     </Box>
                     <Box my={2}>
           
                     <Typography variant="body2" color="textSecondary" component="p">
                      currency: {vis.currencies.map(currency => currency.name)}
                     </Typography>
                     </Box>
                     <Box my={2}>
                     <Typography variant="body2" color="textSecondary" component="p"> 
                      Alphacode : {<span className='alpha2'>{vis.alpha2Code}</span> } , { <span className='alpha3'>{vis.alpha3Code}</span>}
                      </Typography>
                      </Box>
                   </CardContent>
                   </CardActionArea>
                   
                   </Card>
            ))}
       
        </>
    )
   
}

export default Visited