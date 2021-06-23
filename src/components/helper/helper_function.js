import axios from 'axios';
import { setProducts, showProducts, cartPush } from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import  sortArray  from 'sort-array';
import { useEffect, useState } from 'react';




////// Fetch All Products From DB And Load It Into Redux-Store called allProduct
export function useFetchAllProducts() {
    
     const products = useSelector((state) => state.allProducts.products);

     const dispatch = useDispatch() ;
     const fetchAllProducts = async ()=>{
        try{

        const { data } = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(data));
        }catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        if( Object.keys(products).length < 1 ){
            fetchAllProducts();
        }
    },[])

    return products;

}



//// Load All Products Into Temporary Display Redux-Store called displayProducts
export function useLoadProducts(){

     const dispatch = useDispatch() ;
     const products = useSelector((state) => state.allProducts.products);

     useEffect(()=>{
        dispatch(showProducts(products));
     },[products])

}


//// Filterin Data in order to item number, sorting, category (it will filter displayProducts redux-store)
export function useFilter(cat,sort,num,products){

    let newArr = [];
 

    const dispatch = useDispatch() ;

    const filterSetup = ()=>{

        if(cat !== 'all'){
            products = products.filter((product)=>{return product.category === cat;})
          
            if(Object.keys(products).length <= num ){
                num = Object.keys(products).length;
            }
        }else{}
       
        

            if(Object.keys(products).length >= num ){
                for(let i=0;i<num;i++){
                    newArr.push(products[i])
                }
            }
            sortArray(newArr, {
                by: 'price',
                order: `${sort}`
              })

            
            dispatch(showProducts(newArr));


    }
    
    useEffect(() => {
        if(Object.keys(products).length!== 0 ){
            filterSetup();
        }
    }, [cat,sort,num,products]);
    
}




//////// Display Products into Main Body of the Page
export function useDisplay(){

    const displayProducts = useSelector((state) => state.displayProducts.products);
    return displayProducts;

}






////// store cart data into cartList redux-store and send Button flag (cart/uncart)
export function useCartList(id,image,title,price,quantity = 1,cardId,click,btnclick){
    const cartProducts = useSelector(state => state.cartList.products);
    const [flag, setflag] = useState(false);
    const dispatch = useDispatch() ;
    const payload = {id,image,title,price,quantity};
    let newcartProducts = [];


    const loadCart = ()=>{
    
        ///check if it is  carted or not
       newcartProducts = cartProducts.map((product)=>{
            if(product.id === cardId){
                setflag(true);
            }
            return product; 
        })


        if(btnclick){
            if(flag){
                newcartProducts = cartProducts.filter(({id})=>{
                    return cardId !== id;
                    })
                    dispatch(cartPush(newcartProducts));
                    setflag(false);
                    return flag;
            }
            cartProducts.push(payload);
            newcartProducts = [...cartProducts];
            dispatch(cartPush(newcartProducts));
            setflag(true);
            return flag;
        }

    }
    

     useEffect(() => {
        loadCart();
    }, [click])

    return flag;

}





///// Product Detail

export function useProductDetail (id){

    const products = useFetchAllProducts();
    const [data, setdata] = useState({})


    const loadDetaildata = ()=>{

        const myProductDetail = products.filter((product)=>{return product.id == id ;});
        setdata({...myProductDetail[0]});

    }

    useEffect(()=>{
        loadDetaildata();
    },[products])

    return data;

}










