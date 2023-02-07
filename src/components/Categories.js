import React, { Component } from 'react'
import { dataCategory } from './DataCategory';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: dataCategory
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(category => (<p key={category.key} onClick={() => this.props.selectCategory(category.key)}>{category.name}</p>))}
      </div>
    )
  }
}

export default Categories