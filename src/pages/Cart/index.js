import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import tenis from '../../assets/images/tenis.jpg';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={tenis} al="tenis" alt="tenis" />
            </td>
            <td>
              <strong>Cool tenis</strong>
              <span>$90,00</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$ 180,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button>Checkout</button>
        <Total>
          <span>Total</span>
          <strong>$212,87</strong>
        </Total>
      </footer>
    </Container>
  );
}
