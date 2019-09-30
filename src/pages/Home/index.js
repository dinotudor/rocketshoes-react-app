import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import aip from '../../services/api';

import tenis from '../../assets/images/tenis.jpg';
import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt="Tenis" />
            <strong>Nice shoe</strong>
            <span>$89,99</span>
            <button>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 2
              </div>
              <span>Add to cart</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
