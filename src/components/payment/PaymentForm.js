import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'react';
import FillMessage from '../utils/FillMessage';
import { useDispatch,useSelector } from 'react-redux';
import { paymentInfo } from '../../redux/actions/productAction';

export default function PaymentForm({click,render}) {
  console.log("payment render");

    const [ccName, setccName] = useState('');
    const [ccNumber, setccNumber] = useState('');
    const [ccExpr, setccExpr] = useState('');
    const [ccv,setccv] = useState('');
    const [address, setaddress] = useState('');
    const [allFill, setallFill] = useState(false);
    const dispatch = useDispatch();
    const cardAddress = useSelector(state => state.formAddress);

    

    const check=()=>{
      if(ccName==='' || ccNumber===''|| ccExpr===''|| ccv===''|| address==='')
      {
        setallFill(!allFill);
      }else{
        const data ={
          ccName,
          ccNumber,
          ccExpr,
          ccv,
          address,
        }
        dispatch(paymentInfo(data))

      }

    }

    

  useEffect(() => {
    if(click){
      check();
    }
    if(cardAddress.checkBox){setaddress("filled")}

  }, [click,render]); 


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}  style={{paddingBottom:"50px"}}>
        <Grid item xs={12} md={6}>
          <TextField required 
          label="Name on card" 
          fullWidth
          onChange={(e)=>{setccName(e.target.value)}}
          value={ccName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Card number"
            fullWidth
            onChange={(e)=>{setccNumber(e.target.value)}}
            value={ccNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required 
          label="Expiry date" 
          fullWidth 
          onChange={(e)=>{setccExpr(e.target.value)}}
          value={ccExpr} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            onChange={(e)=>{setccv(e.target.value)}}
            value={ccv} 
          />
        </Grid>
        <Grid item xs={12}>
          {
            (cardAddress.checkBox) ?
            ""
            :
          <TextField
            required
            label="Address "
            fullWidth
            onChange = { (e)=>{setaddress(e.target.value)} }
            value={address}
          />
          
          }
        </Grid>
      </Grid>
      <FillMessage clicked={click} rendered={allFill}/>
    </React.Fragment>
  );
}