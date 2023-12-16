import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
const Signup = () => {
  return (
    <div>
    <Box sx={{
        width: 1000,
        maxWidth: '100%',
      }}
 >
        <FormControl>
            <TextField variant='outlined' label="Name"   helperText="Please enter your name" ></TextField><br/>
            <TextField variant='outlined' label="Email"   helperText="Please enter your Email" ></TextField><br/>
            <TextField variant='outlined' label="Password"   helperText="Please enter your Password" ></TextField><br></br>
            <Button variant='contained' color='success' ></Button>
        </FormControl>
    </Box>
    </div>
  )
}

export default Signup