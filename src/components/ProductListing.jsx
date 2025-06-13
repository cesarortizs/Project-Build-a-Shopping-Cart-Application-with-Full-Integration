import {useState, useEffect} from 'react'
import { ProductCard } from "./ProductCard";

export function ProductListing()
{
    const [products, setProducts] = useState([]);

    useEffect(()=>
    {
        async function getProducts()
        {
            let response = await fetch('https://dummyjson.com/products')
            let products = await response.json();
            setProducts(products.products);
        }

        getProducts();

    }, [])

    return (
        <div className='row' style={{margin: 0}}>
            {products.map((prod)=>
            {
                return (
                    <ProductCard key={prod.id} product={prod}/>
                )
            })}
        </div>
    );
}