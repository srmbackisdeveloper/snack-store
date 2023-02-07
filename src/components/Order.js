import React, { Component } from 'react'
import {BsFillTrashFill} from "react-icons/bs";

export class Order extends Component {
  render() {
    return (
      <div className='cart-item'>
        <img src={'./media/' + this.props.item.image} alt={this.props.item.title}/>
        <h1>{this.props.item.title}</h1>
        <p className='price'>{this.props.item.price}₸</p>
        <BsFillTrashFill className='remove' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order