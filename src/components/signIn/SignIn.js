import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { useEffect } from 'react';
import FillMessage from '../utils/FillMessage';
import { Link } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions/productAction';
import Loading from '../utils/Loading';


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [click, setclick] = useState(false);
  const [render, setrender] = useState(false);
  const [msgRender, setmsgRender] = useState(false);
  const [length, setlength] = useState(false);
  const logIn = useSelector(state => state.signInReducer);
  console.log("login Reducer: ",logIn);
  const dispatch = useDispatch();


  const callLogInAPI = async()=>{
          try{

            dispatch(signIn(''));
            const loginfo = {username,password};
            const {data}= await axios.post("https://fakestoreapi.com/auth/login",loginfo)
            console.log(data);
            dispatch(signIn('true'));
  
          }catch(err){
            dispatch(signIn('false'));
            console.log(err);
          }
  }

  useEffect(()=>{

    if( click ){
      if(username.length && password.length ){
        setlength(true)
        callLogInAPI();
    }else{
      setlength(false);
      setmsgRender(!msgRender);
    }
  }
  },[click,render])


  return (
    <>

    {
      (click && length && (logIn==='') )?

      // <Redirect to='/' />
     
      <Loading clicked={click} rendered={render}/>



      :



      <>
     {
       (logIn==='true') ?

       <Redirect to='/' />

       :

       (<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="username"
            autoFocus
            onChange ={(e)=>{setusername(e.target.value)}}
            value={username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            onChange ={(e)=>{setpassword(e.target.value)}}
            value={password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{setclick(true);setrender(!render)}}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/'>
              <p className="text-blue-900 hover:underline">Forgot password?</p>
              </Link>
            </Grid>
            <Grid item>
              <Link to={'/signup'} >
                <p className="text-blue-900 hover:underline">Don't have an account? Sign Up</p>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <FillMessage clicked={click} rendered={msgRender} msg={'All Field Required'}/>


      {
      (click && length && logIn==='false') ?
      <FillMessage clicked={click} rendered={msgRender} msg={'InCorrect UserName Or Password'}/>
      :
      ""
      }
    </Container>

    
       )

     } 
       
     </>

    
    }
    </>
  );
}