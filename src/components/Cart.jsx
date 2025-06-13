import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export function Cart()
{
    const CartContextData = useContext(CartContext);

    useEffect(()=>
    {
        CartContextData.setTotal(0);

        CartContextData.items.map((item)=>
        {
            CartContextData.setTotal((currentState)=> currentState += item.price);
        })
    }, [CartContextData.items])
    
    console.log(CartContextData);

    return(
        <div>
            {CartContextData.items.length > 0 ? CartContextData.items.map((item)=>
		    {
		        return (
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={item.images[0]} className="img-fluid rounded-start" alt="..." style={{
                                height: 350
                            }}/>
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">${item.price}</p>
                                <button className="btn btn-danger" onClick={()=>
                                    {
                                        CartContextData.setShoppingCart((currentState)=> {
                                        return currentState.filter((cartItem)=>
                                        {
                                            return(cartItem.id != item.id);
                                        })
                                    })
                                    }
                                }>Remove from cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                )
		    }) : 
            <div className="text-center" style={{paddingTop: 240, paddingBottom: 240}}>
                <span style={{fontSize: 32}}>Your cart is empty</span>
            </div>}
            {CartContextData.items.length > 0 && <div style={{display: "flex", flexDirection: "column", alignItems: "center"}} className="my-5">
                <span className="mb-3" style={{fontSize: 20}}>Total: ${CartContextData.total.toFixed(2)}</span>
                <Link to="/checkout">
                    <button className="btn btn-primary">Go to checkout</button>
                </Link>
            </div>}
        </div>
    )
}