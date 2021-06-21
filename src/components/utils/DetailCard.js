import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCartList } from '../helper/helper_function';

function DetailCard({id,image,title,category,description,price}) {



    const [click, setclick] = useState(false);
    const [btnclick, setbtnclick] = useState(false);
    const flag = useCartList(id,image,title,price,1,id,click,btnclick);


    const clickhandler = ()=>{
        setclick(!click);
        setbtnclick(true);
    }





    return (
        <div className="w-full px-10 mb-12 shadow-2xl w-64 space-y-2 rounded-xl sm:flex sm:space-x-10 sm:items-center">
           
        <img src={image} alt="product pic" className="h-64 mx-auto mt-5"  />

        
        <div className="w-full  px-5 py-10 text-blue-900">

            <div className="flex justify-between items-center pb-3 sm:justify-start sm:space-x-16  ">
                <div className="space-x-1">
                     <span className="text-sm text-blue-500">{category}</span>
                </div>
                <div className=" space-x-1">
                    <i className="fas fa-tags text-xs sm:text-lg"></i>
                    <span className="text-lg font-bold sm:text-2xl">${price}</span>
                </div>
            </div>



            <div className=" space-x-2 pb-5">
               <span className="text-lg font-semibold">Title:</span>
               <span className="text-md ">{title}</span>
            </div>

            <div className=" space-x-3 ">
               <span className="text-lg font-semibold">Description:</span>
               <span className="text-md ">{description}</span>
            </div>


            <div className=" space-x-2 pb-3 mt-8">
            {flag ? 
                   <button className="px-2 py-1 bg-red-400 text-white rounded-sm" onClick={clickhandler}>UnCart</button>
                   :
                   <button className="px-6 py-1 bg-blue-900 text-white rounded-sm" onClick={clickhandler}>Cart</button>
                   
            }
               <Link to={"/"}> <button className="px-6 py-1 bg-blue-900 text-white rounded-sm">Back</button> </Link>
            </div>
               
        </div>

    </div>
    )
}

export default DetailCard
