import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

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


export default function Testing() {
  const classes = useStyles();



  var rn = require('random-number');
  var gen = rn.generator({
    min:  0
  , max:  1000000
  , integer: true
  })
 const val = gen();

  return (
<React.Fragment>

<div className={classes.buttons}>
  
    <Button 
    // onClick={handleBack} 
    className={classes.button}>
       Back
    </Button>

  <Button
    variant="contained"
    color="primary"
    //  onClick={handleNext}
    className={classes.button}
  >
     Cart
   </Button>
   
</div>
</React.Fragment>
  );
}
