import StepsHeader from './StepsHeader';
import './style.css'
import ProductsList from './ProductsList'
import { useEffect, useState } from 'react';
import { OrderLocationdata, Product } from './Types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation'


function Orders(){

    const[products,setProducts]= useState<Product[]>([]);
    const[orderLocation,setorderLocation]= useState<OrderLocationdata>();
    
    
    useEffect(()=>{

        fetchProducts()
        .then(response=> setProducts(response.data))
        .catch(error=>console.log(error))

    },[]);

    return(
            <div className="orders-container">
                <StepsHeader/>
                <ProductsList products={products}/>
                <OrderLocation onChangeLocation={location=> setorderLocation(location)}/>    
            </div>

    )
    
}
export default Orders;