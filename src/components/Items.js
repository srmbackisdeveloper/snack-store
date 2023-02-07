import React, { Component } from 'react'
import Item from './Item';

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((item) => {
          return <Item showItemPage={this.props.showItemPage} item={item} key={item.id} onAdd={this.props.onAdd}/>
        })}
      </main>
    )
  }
}

export default Items