import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function ProductCard(props)
{
    const CartContextData = useContext(CartContext);

    return(
        <div className="card col-12 col-md-3">
            <img src={props.product.images[0]} className="card-img-top" alt={props.product.title} style={{
                height: 350
            }}/>
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <p className="card-text">${ props.product.price }</p>
                <button className="btn btn-primary" style={{width: "100%"}} onClick={()=>
                    {
                        CartContextData.setShoppingCart((currentState)=>[props.product, ...currentState])
                    }
                }>Add to cart</button>
            </div>
        </div>
    )
}