import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState, useEffect } from 'react';
import FillMessage from '../utils/FillMessage';
import { useDispatch } from 'react-redux';
import { formAddress } from '../../redux/actions/productAction';




export default function AddressForm({click,render}) {


    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [zipCode, setzipCode] = useState('');
    const [country, setcountry] = useState('');
    const [checkBox,setcheckBox] = useState(false)
    const [msgRender, setmsgRender] = useState(false);
    const dispatch = useDispatch();


 

    const check=()=>{
      if(firstName==='' || lastName ===''|| address===''|| city===''|| state===''|| zipCode===''|| country==='')
      {
        setmsgRender(!msgRender);
      }else{
        const data ={
          firstName,
          lastName,
          address,
          city,
          state,
          zipCode,
          country,
          checkBox
        }
        dispatch(formAddress(data))

      }

    }

    

  useEffect(() => {
    if(click){
      check();
    }
  }, [click,render]);  
    

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            onChange = { (e)=>{ setfirstName(e.target.value) } }
            value={firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Last name"
            fullWidth
            onChange = { (e)=>{setlastName(e.target.value)} }
            value={lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Address"
            fullWidth
            onChange = { (e)=>{setaddress(e.target.value)} }
            value={address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="City"
            fullWidth
            onChange = { (e)=>{setcity(e.target.value)} }
            value={city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="State/Province/Region" 
            fullWidth 
            onChange = { (e)=>{setstate(e.target.value)} }
            value={state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Zip / Postal code"
            fullWidth
            onChange = { (e)=>{setzipCode(e.target.value)} }
            value={zipCode}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Country"
            fullWidth
            onChange = { (e)=>{setcountry(e.target.value)} }
            value={country}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" value={checkBox} onChange= { (e)=>{setcheckBox(!checkBox)} } />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      
      <FillMessage clicked={click} rendered={msgRender} msg={'All Field Required'}/>


    </React.Fragment>
  );
}