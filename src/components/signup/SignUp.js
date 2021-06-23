import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FillMessage from '../utils/FillMessage';
import { useEffect, useState } from 'react';
import { signUp } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import  { Redirect } from 'react-router-dom';
import Loading from '../utils/Loading';
import axios from 'axios';





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignUp() {
  const classes = useStyles();

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [click, setclick] = useState(false);
  const [render, setrender] = useState(false);
  const [msgRender, setmsgRender] = useState(false);
  
  const [length, setlength] = useState(false);
  const signUpState = useSelector(state => state.signUpReducer);
  console.log(signUpState);
 
  const dispatch = useDispatch();



  const callSignUpAPI = async()=>{
          try{

            dispatch(signUp(''));
            const signUpInfo = {firstName,lastName,email,password};
            const {data}= await axios.post("https://fakestoreapi.com/users",signUpInfo)
            if(data.status === 'Error'){
              dispatch(signUp('false'));
            }else{
              dispatch(signUp('true'));
            }
  
          }catch(err){
            dispatch(signUp('false'));
          }
  }

  useEffect(()=>{

    if( click ){
      if(firstName.length && lastName.length &&password.length && email.length){
        setlength(true)
        callSignUpAPI();
    }else{
      setlength(false);
      setmsgRender(!msgRender);
    }
  }
  },[click,render])









  return (
    <>


{
      (click && length && (signUpState==='') )?
      <Loading clicked={click} rendered={render}/>

      :

      <>
     {
       (signUpState==='true' ||  (localStorage.getItem('signUpState') === 'true')) ?
       <Redirect to='/signin' />

       :



    (<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e)=>{setfirstName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                value={lastName}
                onChange={(e)=>{setlastName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{setclick(true);setrender(!render)}}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={'/signin'}>
              <p className="text-blue-900 hover:underline">Already have an account? Sign in</p>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      

    </Container>)
}
</>

}




{
  (click && length && signUpState==='false') ?
  <FillMessage clicked={click} rendered={msgRender} msg={'May be Account exist Try Again'}/>
  :
  ""
  }
  {
  (click && !length && (signUpState==='false' || signUpState==='')) ?
  <FillMessage clicked={click} rendered={msgRender} msg={'All Field Required'}/>
  :
  ""
  }
  </>
  );
}