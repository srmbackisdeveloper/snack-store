import React, { Component } from 'react'

export class ItemPage extends Component {
  render() {
    return (
        <div className='item-page'>
            <div className='item-modal'>
                <img src={'./media/' + this.props.item.image} onClick={() => this.props.showItemPage(this.props.item)}/>
                <h1>{this.props.item.title}</h1>
                <p>{this.props.item.description}</p>
                <p className='category'>Category: {this.props.item.category}</p>
                <p className='price'>{this.props.item.price} ₸</p>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>Add to Cart</div>
            </div>
        </div>
    )
  }
}

export default ItemPage