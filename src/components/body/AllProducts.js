import React, { useEffect } from 'react'
import { Card } from '../utils/Card';
import { useDisplay } from '../helper/helper_function';


function Allproducts() {
    


    const displayProducts = useDisplay();


    return (
        <>

        {

        Object.keys(displayProducts).length !==0 ?


        <div className="flex flex-wrap justify-center sm:mt-12 ">
            {
                displayProducts.map((product)=>{
                    const {id,title,price,category,image} = product;
                    const obj = {image,price,title,category,id};
                    return <Card {...obj} key={id}/>;
                    
                })
            }
        </div>
        :
        <div className="text-2xl text-center mt-10 text-blue-900 text-bold">Loading...</div>

        }
        </>

    )
}

export default Allproducts
