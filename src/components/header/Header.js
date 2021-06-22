import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import { useSelector} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const intialState = {
    name: "user",
    loggedin: true
}


const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);



function Header() {

    const [user, setuser] = useState(intialState);
    

    const products = useSelector(state => state.cartList.products)
    const item = Object.keys(products).length;
    // console.log("Header",products);
  
    const {name, loggedin} = user;
  
    return (
        <div className=" w-full px-5 py-3 shadow-lg text-blue-900 flex justify-between items-center sm:px-12">

            <div className="flex items-center space-x-2 sm:space-x-2">
                 <Link to={`/`} >   <i className="fab fa-shopify text-xl sm:text-3xl"></i> </Link>
                <span className="text-xl font-semibold sm:text-3xl">Fake Api Shop</span>
            </div>

        

            <div className="flex items-center space-x-6 sm:space-x-16">
               <Link to="/cartpage">
                    <Badge badgeContent={item} color="secondary">
                        <i className="fas fa-shopping-cart  text-lg sm:text-xl"></i> 
                    </Badge>
                </Link> 
                
                    {/* {
                    loggedin ?
                    <div className="flex items-center space-x-2" onClick={()=>{setuser((state) =>{return ({...state,loggedin:!state.loggedin})})}} >
                    <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    variant="dot">
                    <i className="fas fa-user-circle text-lg sm:text-2xl"></i> 
                    </StyledBadge>
                    <span className="font-bold sm:text-semibold">{name}</span>
                    </div> 
                    : */}


                    <Link to="/signin">
                    <div className="flex items-center space-x-2" onClick={()=>{setuser((state) =>{return ({...state,loggedin:!state.loggedin})})}} >
                    <i className="fas fa-sign-in-alt "></i>
                    <span className="font-bold sm:text-semibold">SignIn</span>
                    </div>
                    </Link> 


                    {/* } */}

            </div>
            

        </div>
    )
}

export default Header
