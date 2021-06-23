import React from 'react'
import { Card } from '../utils/Card';
import { useDisplay } from '../helper/helper_function';
import Loading from '../utils/Loading';


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
        <Loading />

        }
        </>

    )
}

export default Allproducts
