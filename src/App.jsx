import { useState, useEffect } from 'react'
import './App.css'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { CartContext } from './contexts/CartContext';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(()=>
  {
    console.log(shoppingCart);
  }, [shoppingCart])

  // const routerLocation = useLocation();

  // const navigate = useNavigate();

  // useEffect(()=>
  // {

  //   navigate('/', {state: count})

  // }, [])

  return (
    <CartContext.Provider value={{items: [...shoppingCart], setShoppingCart, total: total, setTotal}}>
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Shopping application</Link>
          <div>
            {/* Esto probablemente ya no es necesario */}
            <a onClick={()=>
              {
                navigate("/cart", {state: ''})
              }
            }>
              <i className="bi bi-cart2 iconoCarrito" style={{
                color: "black",
                fontSize: 35
              }}></i>
            </a>
          </div>
        </div>
      </nav>
      {<Outlet/>}
    </>
    </CartContext.Provider>
  )
}

export default App
