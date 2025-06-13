import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./Checkout.module.css";

export function Checkout()
{
    const CartContextData = useContext(CartContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    return(
        <div style={{}}>
        <h4 className="text-center my-4">Your products</h4>
        {CartContextData.items && CartContextData.items.map((item)=>
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
                        </div>
                        </div>
                    </div>
                </div>
            )
		    })}
            <div>
                <h4 className="my-4 text-center">Order details</h4>
                <form action="" className={styles.formSection}>
                    <input className="form-control" type="text" placeholder="Enter your name" value={name} required onChange={(e)=>
                        {
                            setName(e.target.value);
                        }
                    }/>
                    <input className="form-control" type="email" placeholder="Enter your email" value={email} required onChange={(e)=>
                        {
                            setEmail(e.target.value);
                        }
                    }/>
                    <input className="form-control" type="text" placeholder="Enter your address" value={address} required onChange={(e)=>
                        {
                            setAddress(e.target.value);
                        }
                    }/>
                    <span className="mb-3" style={{fontSize: 20}}>Total: ${CartContextData.total.toFixed(2)}</span>
                    <button className="btn btn-primary" onClick={(e)=>
                    {
                        e.preventDefault();

                        if (name === "" || email === "" || address === "")
                        {
                            alert("Please fill the required fields before continuing");
                        }
                        
                        else
                        {
                            setShowAlert(true);
                        }
                    }}>Confirm order</button>
                </form>
                { showAlert && <div className="alert alert-success" style={{width: "50%", margin: "auto"}} role="alert">
                Your order has been placed!
                </div>}
            </div>
        </div>
    )
}