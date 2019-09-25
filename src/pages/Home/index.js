import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import tenis from '../../assets/images/tenis.jpg';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={tenis} alt="shoe" />
        <strong>Nice shoe</strong>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="shoe" />
        <strong>Nice shoe</strong>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="shoe" />
        <strong>Nice shoe</strong>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="shoe" />
        <strong>Nice shoe</strong>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="shoe" />
        <strong>Nice shoe</strong>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="shoe" />
        <strong>Nice shoe</strong>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
