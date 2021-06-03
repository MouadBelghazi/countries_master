import { Box, TextField ,FormControl ,Select,MenuItem} from '@material-ui/core'
import React , {useState} from 'react'

const Searching = () => {
   // set the state of search by and open the select
    const [searchby, setSearchBY] = useState('');
    const [open, setOpen] = useState(false);
  
    // handle the eventes on the select option
    const handleChange = (e) => {
        setSearchBY(e.target.value);
    }
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    // the search function
    const onWrite = value => {
      // get the data that we will search by
        const countryName = document.querySelectorAll('.country-name')
        const alph3code = document.querySelectorAll('.alpha3')
        const alph2code = document.querySelectorAll('.alpha2')

        // init searching var
        let searching = countryName;

        if(searchby === 'country'){
            searching = countryName
        }

        else if(searchby === 'alpha2Code'){
            searching = alph2code
        }
        
        else if(searchby === 'alpha3Code'){
            searching = alph3code
        }


        // looping through the 
        searching.forEach(searchingby => {
        if(searchingby.innerText.toLowerCase().includes(value.toLowerCase())){
          searchingby.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'block'
        }
        else {
          searchingby.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
        }
    })}
    //return the search bar and the select option fieldes
    return (
        <div>
            <Box mt={2}>
              <TextField
                    id="search"
                    name= 'search'
                    label="Search for country"
                    variant="outlined"
                    color="primary"
                    onInput ={(e) => onWrite(e.target.value)}
                />
                 <FormControl style={{width:'100px', margin: '18px 5px'}} >
                    <Select
                    labelId="searchby"
                    id="searchby"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={searchby}
                    onChange={handleChange}
                    >    
                  <MenuItem value={'country'}>country</MenuItem>
                  <MenuItem value={'alpha2Code'}>alpha2Code</MenuItem>
                  <MenuItem value={'alpha3Code'}>alpha3Code</MenuItem>
                </Select>
              </FormControl>
            </Box>
        </div>
    )
}

export default Searching
