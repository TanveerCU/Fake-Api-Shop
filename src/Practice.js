import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

const useStyles = makeStyles(theme=>({
  iconColor: {
    color: theme.palette.primary.dark
  }
}
)
);

export default function Example() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer =(event) => {
    console.log(event, event.type, event.key);
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(!state);
  };

  

  return (

      
        <React.Fragment >
          <Button onClick={toggleDrawer}>menu</Button>
          <SwipeableDrawer
          anchor={"left"}
            open={state}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
          >
             <div
             onClick={toggleDrawer}
             onKeyDown={toggleDrawer}
             >

               <div
             onClick={toggleDrawer}
             onKeyDown={toggleDrawer}
             className="flex items-center space-x-2 sm:space-x-2 p-4 mb-6 text-blue-900"
             >
              <i className="fab fa-shopify text-xl sm:text-2xl"></i>  
              <span className="text-xl font-semibold sm:text-2xl pr-4">Fake Api Shop</span>
              <MenuOpenRoundedIcon  />
             </div>
             <Divider />

            <List className="text-blue-900">
            
              <ListItem button >
                <ListItemIcon>
                  <HomeRoundedIcon className={classes.iconColor}/>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <Divider />


              <ListItem button >
                <ListItemIcon>
                  <ShoppingBasketIcon className={classes.iconColor}/>
                </ListItemIcon>
                <ListItemText primary={"Purchased"} />
              </ListItem>
              <Divider />

              <ListItem button >
                <ListItemIcon>
                  <LocalShippingRoundedIcon className={classes.iconColor}/>
                </ListItemIcon>
                <ListItemText primary={"Ordered"} />
              </ListItem>
              <Divider />


              <ListItem button >
                <ListItemIcon>
                  <SettingsApplicationsRoundedIcon className={classes.iconColor}/>
                </ListItemIcon>
                <ListItemText primary={"Setting"} />
              </ListItem>
              <Divider />
           
          </List>
          </div>
          </SwipeableDrawer>
        </React.Fragment>

  
  );
}
