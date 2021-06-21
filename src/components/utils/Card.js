import React from 'react'
import { Link } from 'react-router-dom'
import { useState} from 'react';
import { useCartList } from '../helper/helper_function';


export function Card({id,image,price,title,category}) {

 
    const [click, setclick] = useState(false);
    const [btnclick, setbtnclick] = useState(false);
    const flag = useCartList(id,image,title,price,1,id,click,btnclick);


    const clickhandler = ()=>{
        setclick(!click);
        setbtnclick(true);
    }


    return (
        <div className="mx-5 my-5 p-2 shadow-2xl w-64 space-y-2 rounded-xl">
           
            <img src={image} alt="product pic" className="h-56 mx-auto"  />
            
            <div className="w-full  px-5 text-blue-900">

                <div className="flex justify-between items-center pb-3 ">
                    <div className="space-x-1">

                         <span className="text-sm text-blue-500">{category}</span>
                    </div>
                    <div className=" space-x-1">
                        <i className="fas fa-tags text-xs"></i>
                        <span className="text-lg font-bold">${price}</span>
                    </div>
                </div>

                <div className=" space-x-3 pb-5">
                   <span className="text-lg font-semibold">{title}</span>
                </div>

                <div className=" space-x-2 pb-3">
                   <Link to={`/product/${id}`} > <button className="px-6 py-1 bg-blue-900 text-white rounded-sm">Detail</button> </Link>
                   {flag ? 
                   <button className="px-2 py-1 bg-red-400 text-white rounded-sm" onClick={clickhandler}>UnCart</button>
                   :
                   <button className="px-6 py-1 bg-blue-900 text-white rounded-sm" onClick={clickhandler}>Cart</button>
                  }
                </div>  
            </div>
        </div>
    )
}

export default Card;
