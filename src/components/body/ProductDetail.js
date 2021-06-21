import React from 'react'
import { useParams } from 'react-router';
import DetailCard  from '../utils/DetailCard';
import { useProductDetail } from '../helper/helper_function';


function ProductDetail() {
    const { id } = useParams();
    const product = useProductDetail(id);
    
    return (
        <div className="flex justify-center mt-16">
            {
                Object.keys(product).length ===0 ? 
                <h1>Loading...</h1>
                :
                <DetailCard {...product}/>
            
            }
        </div>
    )
}

export default ProductDetail
