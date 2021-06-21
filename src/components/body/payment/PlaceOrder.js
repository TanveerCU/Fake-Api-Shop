import React from 'react'
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {invoice, cartPush} from '../../../redux/actions/productAction'

function PlaceOrder() {


const tempInvoice = useSelector(state => state.temp);
const invoiceData = useSelector(state => state.formInvoice.data);
const dispatch = useDispatch();

const setupInvoice = ()=>{
    let data = [...invoiceData];
    data.push(tempInvoice)
    dispatch(invoice(data));
    dispatch(cartPush([]));
}


useEffect(()=>{
    setupInvoice();
},[])
return (
    <React.Fragment>
    <Typography variant="h5" gutterBottom>
      Thank you for your order.
    </Typography>
    <Typography variant="subtitle1">
      Your order number is #2001539. We have emailed your order confirmation, and will
      send you an update when your order has shipped.
    </Typography>
  </React.Fragment>
)
}

export default PlaceOrder
