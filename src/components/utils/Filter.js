import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState, useEffect } from 'react';
// import { useEffect,useState } from 'react';
// import {useDispatch } from 'react-redux';
// import { setProducts } from '../../redux/actions/productAction'

import axios from 'axios';
import { useFetchAllProducts, useLoadProducts, useFilter } from '../helper/helper_function';


const useStyles = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(1),
    minWidth: 65,
    textAlign: "center",
    color:theme.palette.primary.dark
  },
  customColor:{
    color:theme.palette.primary.dark
  }
}));

function Filter() {


    const classes = useStyles();
    const [items, setItems] = useState(20);
    const [sort, setSort] = useState("asc");
    const [category, setCategory] = useState("all");
    const [itemsOpen, setItemsOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [allCatagory, setallCatagory] = useState([]);


    const products = useFetchAllProducts();
    useLoadProducts(products)
    useFilter(category,sort,items,products);


  
    const handleChange = (event) => {
    
        if(event.target.name === 'items'){  setItems(event.target.value); console.log("items");}
        if(event.target.name === 'sort'){  setSort(event.target.value); }
        if(event.target.name === 'category'){  setCategory(event.target.value); }
    };
  
    const handleClose = () => {
            setItemsOpen(false);
            setSortOpen(false);
            setCategoryOpen(false);
        
    };
  
    const handleOpen = (event) => {
        console.log("open: ",event.target.id);
        if(event.target.id === 'items'){  
            setItemsOpen(true); 
        }
        if(event.target.id === 'sort'){  
            setSortOpen(true); 
        }
        if(event.target.id === 'category'){  
            setCategoryOpen(true);
        }
            
    };

 


  const getCatagory = async()=>{
      try{
          const {data} = await axios.get('https://fakestoreapi.com/products/categories');
          setallCatagory(['all',...data]);
      }catch(err){
          console.log(err)
      }
  }  



  useEffect(()=>{
      getCatagory();
  },[])

    return (
      <div className="mt-8 flex justify-center space-x-8">
        
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label" className={classes.customColor}>Items</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="items"
            name ="items"
            open={itemsOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            value={items}
            onChange={handleChange}
            className={classes.customColor}
          >
            <MenuItem value={5} className={classes.customColor}>5</MenuItem>
            <MenuItem value={10} className={classes.customColor}>10</MenuItem>
            <MenuItem value={15} className={classes.customColor}>15</MenuItem>
            <MenuItem value={20} className={classes.customColor}>20</MenuItem>
          </Select>
        </FormControl>


        <FormControl className={classes.formControl} >
          <InputLabel id="demo-controlled-open-select-label" className={classes.customColor}>Sort</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="sort"
            name ="sort"
            open={sortOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            value={sort}
            onChange={handleChange}
            className={classes.customColor}
          >
            <MenuItem value="asc" className={classes.customColor}>asc</MenuItem>
            <MenuItem value="desc" className={classes.customColor}>desc</MenuItem>
          
          </Select>
        </FormControl>


        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label" className={classes.customColor}>Category</InputLabel>
        
              {

                  Object.keys(allCatagory).length !==0 ?
                  
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="category"
                    name ="category"
                    open={categoryOpen}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={category}
                    onChange={handleChange}
                    className={classes.customColor}>
                  {
                    allCatagory.map((val,i)=>{
                        return (<MenuItem value={`${val}`} className={classes.customColor} key={i}>{val}</MenuItem>);
                      })
                  }
                  </Select>
                  :
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="category"
                    name ="category"
                    open={categoryOpen}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={category}
                    onChange={handleChange}
                    className={classes.customColor}> 
                 <MenuItem value={"all"} className={classes.customColor}>all</MenuItem> 
                 </Select>
              }
            
        </FormControl>
      </div>
    );
}

export default Filter
