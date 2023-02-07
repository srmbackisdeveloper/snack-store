import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import { data } from './components/Data';
import ItemPage from './components/ItemPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPageOn: false,
      itemData: {},
      orders: [],
      currentItems: [],
      items: data 
    };

    this.state.currentItems = this.state.items
    this.addToCart = this.addToCart.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
    this.showItemPage = this.showItemPage.bind(this)
  }

  render () {
    return (
    <div id='header'>
      <div className='container'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories selectCategory={this.selectCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToCart} showItemPage={this.showItemPage}/>
        {this.state.itemPageOn && <ItemPage item={this.state.itemData} onAdd={this.addToCart} showItemPage={this.showItemPage}/>}
      </div>
      <Footer />
    </div>
  );}
  
  addToCart(item) {
    let isInArray = false;

    this.state.orders.forEach(order => {
      if(order.id === item.id) {
        isInArray = true;
      }
    })

    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]});
    }
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter((item) => item.id !== id)});
  }

  selectCategory(cat) {
    const currentItems = cat === 'all' ? this.state.items : this.state.items.filter(item => (item.category === cat));
    this.setState({currentItems})
  }

  showItemPage(item) {
    this.setState({
      itemPageOn: !this.state.itemPageOn,
      itemData: item
    })
  }
}

export default App;
