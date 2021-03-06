import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import PlaceOrder from './PlaceOrder';




const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));



export default function Checkout() {

const address = useSelector(state => state.formAddress);
const payment = useSelector(state => state.formPayment);


  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [click, setclick] = useState(false);
  const [render, setrender] = useState(false);


  const steps = ['Shipping address', 'Payment details', 'Review your order'];

    function getStepContent(step,click=false,render) {
    switch (step) {
        case 0:
        return <AddressForm click={click} render={render}/>;
        case 1:
        return <PaymentForm click={click} render={render}/>;
        case 2:
        return <Review click={click}/>;
        default:
        throw new Error('Unknown step');
    }
    }


  const handleNext = () => {
    setclick(true);
    setrender(!render);
    if(activeStep === 2){
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setclick(false);
    setActiveStep(activeStep - 1);
  };


  useEffect(() => {
      if(Object.keys(address).length!==0){
        setclick(false);
        setActiveStep(activeStep + 1);
      }
      
  }, [address]);

  useEffect(() => {
    if(Object.keys(payment).length!==0){
      setActiveStep(activeStep + 1);
    }
 }, [payment]);


 

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <PlaceOrder/>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep,click,render)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}