import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import {tempInvoice} from '../../redux/actions/productAction'
import { useDispatch } from 'react-redux';





const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));



export default function Review() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [products, setproducts] = useState([]);
  const [addresses, setaddress] = useState([]);
  const [payments, setpayment] = useState([]);
  const [total, settotal] = useState(0);

  const cartListData = useSelector(state => state.cartList.products);
  const shippingAddress = useSelector(state => state.formAddress);
  const paymentinfo = useSelector(state => state.formPayment)


const setupBillInfo = ()=>{
  let totalMoney = 0;

  const cartProduct = cartListData.map((data)=>{
    totalMoney = totalMoney + data.price;
    return (
      { name: data.title , quantity: data.quantity , price: data.price }
    )

  })

  const cardData = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: `${ paymentinfo.ccName}` },
    { name: 'Card number', detail: `${ paymentinfo.ccNumber}` },
    { name: 'Expiry date', detail: `${ paymentinfo.ccExpr}` },
  ];

  const shippingData = [
    shippingAddress.address,
    shippingAddress.city,
    shippingAddress.state,
    shippingAddress.zipCode,
    shippingAddress.country
  ]

  const invoiceData = {
    cartData: cartProduct,
    shippingAddress: shippingData,
    cardData: cardData,
    total: totalMoney 
  }

  dispatch(tempInvoice(invoiceData));
  setproducts(cartProduct);
  setpayment(cardData);
  setaddress(shippingData);
  settotal(totalMoney);


}


useEffect(() => {
  setupBillInfo();
}, []);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>


      {  
            (Object.keys(cartListData).length !== 0 && Object.keys(shippingAddress).length !== 0 && Object.keys(paymentinfo).length !== 0) ?


      (<>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.quantity} />
            <Typography variant="body2">${product.price.toFixed(2)}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${total.toFixed(2)}
          </Typography>
        </ListItem>
      </List>

      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${shippingAddress.firstName} ${shippingAddress.lastName}`}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </>
      )
      :
      <div>Loading....</div>
       
            }





    </React.Fragment>
  );
}