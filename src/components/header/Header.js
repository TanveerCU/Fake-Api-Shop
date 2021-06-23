import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import { useSelector} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch} from 'react-redux';
import { signIn } from '../../redux/actions/productAction';


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


    const products = useSelector(state => state.cartList.products)
    const item = Object.keys(products).length;
    const loggedInLocalStorage = localStorage.getItem('login');
    const loggedInReduxStorage = useSelector(state => state.signInReducer);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();




    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logOut = () => {
      localStorage.removeItem("login");
      setAnchorEl(null);
      dispatch(signIn(''));
    };

  

  
    return (
        <div className=" w-full px-5 py-3 shadow-lg text-blue-900 flex justify-between items-center sm:px-12">


            <div className="flex items-center space-x-3 sm:space-x-2">
              { (loggedInLocalStorage || loggedInReduxStorage)?
               <span className="flex items-center sm:pr-10 "><MenuRoundedIcon /></span>
               :
               ""
             }
                 <Link to={`/`} > 
                 <i className="fab fa-shopify text-xl sm:text-3xl "></i> 
                 </Link>
                <span className="text-md font-semibold mt-1/4 sm:text-3xl">Fake Api Shop</span>
            </div>

        

            <div className="flex items-center space-x-6 sm:space-x-16">
               <Link to="/cartpage">
                    <Badge badgeContent={item} color="secondary">
                        <i className="fas fa-shopping-cart  text-lg sm:text-xl"></i> 
                    </Badge>
                </Link> 
                
                    {
                    (loggedInLocalStorage || loggedInReduxStorage)?
          
                    <>
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={handleClick}>
                    <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    variant="dot">
                    <i className="fas fa-user-circle text-lg sm:text-2xl"></i> 
                    </StyledBadge>
                    <span className="font-bold sm:text-semibold">user</span>
                    </div>
                    <Menu
                     id="simple-menu"
                     anchorEl={anchorEl}
                     keepMounted
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                   >
                   <Link to="/"><MenuItem onClick={handleClose}>Profile</MenuItem></Link>  
                   <Link to="/"><MenuItem onClick={handleClose}>My account</MenuItem></Link>
                   <Link to="/signin"><MenuItem onClick={logOut}>Logout</MenuItem></Link>
                   </Menu>
                    </> 


                    :

               
                    <Link to="/signin">
                    <div className="flex items-center space-x-2" >
                    <i className="fas fa-sign-in-alt "></i>
                    <span className="font-bold sm:text-semibold">SignIn</span>
                    </div>
                    </Link>
                     
          

                    }

            </div>
            

        </div>
    )
}

export default Header
