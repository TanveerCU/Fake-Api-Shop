
import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartPush } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const IncrementDecrement = ({quantity,id})=>{


  const itemId = id;
  const products = useSelector(state => state.cartList.products)
  const dispatch = useDispatch();

  const add = ()=>{
    const newCartProducts = products.map((product)=>{
      if(product.id === itemId){
        product.price = product.price + (product.price /product.quantity);
        product.quantity = product.quantity + 1;
        return product;
      }
      return product;
    })
    dispatch(cartPush(newCartProducts));
  }


  const minus = ()=>{

    const newCartProducts = products.map((product)=>{

      if(product.id === itemId){
        product.price = product.price - (product.price /(product.quantity));
        product.quantity = product.quantity - 1;
        return product;
      }
      return product;
    }).filter((product)=>{ return product.quantity!==0; })
    dispatch(cartPush(newCartProducts));
  }



  return(
    <>
    <div className="flex items-center space-x-2">
    <i className="fas fa-minus cursor-pointer text-sm" onClick={minus}></i>
    <h3 className="text-xl font-bold">{quantity}</h3>
    <i className="fas fa-plus cursor-pointer text-sm" onClick={add}></i>
    </div>
    </>
  )
}


const ProductTitle = ({title,image})=>{

  return(
    <div className="mt-10 text-center flex flex-col items-center sm:flex-row   sm:space-x-2 ">
      <img src={image} alt="my pic" className="h-12 w-12"/>
      <div>{title}</div>
    </div>
  )
}



function CartProduct() {




  const products = useSelector(state => state.cartList.products)
  console.log(products);
  const [total, settotal] = useState(0);
  const totalfunc = ()=>{
    let total = 0;
    products.map((product)=>{
      total = total + product.price;
     })
     settotal(total);
  }

  useEffect(()=>{
    totalfunc();
  },[products])

    return (
      <>
      {
        Object.keys(products).length !==0 ?
        
        <div className="mx-auto mt-16 overflow-auto text-blue-900 ">
            <table className="mx-auto table-auto  p-10 mb-16">
              
              <thead>
                <tr className="text-blue-900">
                  <th  className="sm:pb-10  text-center">Product</th>
                  <th  className="pl-5 sm:pb-10 text-center">Quantity</th>
                  <th  className="sm:pb-10 text-center">Price</th>
                </tr>
              </thead>


              {

              products.map(({id,title,image,quantity,price})=>{

                return (
                <tbody key={id}>
                <tr>
                  <td className="pb-3 sm:px-7 sm:pb-10 ">
                    <ProductTitle title={title} image={image} />
                  </td>
                  <td className="pl-5 sm:px-13 sm:py-5 text-center ">
                    <IncrementDecrement quantity={quantity} id={id}/>
                  </td>
                  <td className="px-1 sm:px-16 sm:py-5 text-center text-xl font-bold">${price.toFixed(2)}</td>
                </tr>
              </tbody>
                );

              })  

              }



              <tfoot>
                <tr>
                  <td></td><td></td>
                  <td className="text-center pt-10 pr-5 sm:pr-0">
                    <span className="space-x-2">
                      <span className="font-semibold">Total:</span>
                      <span className="text-2xl font-bold">${total.toFixed(2)}</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td></td><td></td>
                  <td className="text-center pt-10 pr-5 sm:pr-0 flex space-x-3">

                     <Link to='/'> <div className="font-semibold bg-blue-900 text-white px-5 py-1 flex items-center rounded-sm ">
                      Back
                      <i className="fas fa-backward pl-1"></i>
                    </div></Link>
                     <Link to='/billingpage'> <div className="font-semibold bg-blue-900 text-white px-5 py-1 flex items-center rounded-sm">
                     <i className="fas fa-forward pr-1"></i>
                       Buy
                     </div></Link>
       
                  </td>
                </tr>
              </tfoot>


            </table>
        </div>
        
        :
        <div className="text-2xl text-center mt-16 text-blue-900 ">You Did not Cart Any Item</div>
      }
      </>
    )
}

export default CartProduct
