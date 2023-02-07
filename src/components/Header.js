import React, { useState } from 'react'
import { TfiShoppingCartFull } from "react-icons/tfi";
import Order from './Order';

const showOrders = (props) => {
  let sum = 0;

  props.orders.forEach(order => {
    sum += Number.parseFloat(order.price);
  })

  return (
    <div>
      {props.orders.map(order => {
        return <Order onDelete={props.onDelete} key={order.id} item={order}/>
      })}
      <p className='sum'>Total: {new Intl.NumberFormat().format(sum)}₸</p>
    </div>
  )
}

const showNone = () => {
  return (
  <div className='cart-empty'>
    <h1>No order yet!</h1>
  </div>
  )
}

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
        <div>
          <span className="logo"><a href='/'>Snack Store</a></span>
          <ul className='navbar'>
            <li><a>Home page</a></li>
            <li><a>Deliver</a></li>
            <li><a>Contacts</a></li>
          </ul>
          <TfiShoppingCartFull onClick={() => setCartOpen(!cartOpen)} className={`cart ${cartOpen && 'active'}`}/>

          {cartOpen && (
            <div className='cart-content'>
              {props.orders.length > 0 ? showOrders(props) : showNone()}
            </div>
          )}
        </div>
        <div className="presentation"></div>
    </header>
  )
}
