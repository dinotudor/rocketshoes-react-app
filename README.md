# React Project appling Redux

### ** Rocketshoes ** Fictional e-commerce for learning purpouses

_Part of Rockeseat Bootcamp module 07_

Fictionional online store. Loads a API using Json Server to host a "fake" server. Two pages, Home and Cart;
State management using Redux, Saga. Styled components for CSS customizations;

**Home:** display a list of all products avaiable on DB, with price and description;

- _Functionalities:_
  -Add to Cart

**Cart:** display a list of all products added to cart, quantity, subtotal and total;

- _Functionalities:_
  - Add item
  - Remove item
  - Delete item

![alt text](https://github.com/dinotudor/rocketshoes-react-app/blob/master/src/assets/images/app-screenShot1.png)
![alt text](https://github.com/dinotudor/rocketshoes-react-app/blob/master/src/assets/images/app-screenShot2.png)
_created using `create-react-app`_

after clone, run yarn on root to install dependencies:

#### _scripts:_

- `"start": "react-scripts start"`
- `"build": "react-scripts build"`
- `"test": "react-scripts test"`
- `"eject": "react-scripts eject"`

To run the app: (CLI)

**run pseudo server using Json Server**
`$ json-server server.json -p 3333`

**run react**
`$ yarn start`

Local port react: _(http://localhost:3000)_
Local port API: _(http://localhost:3333)_
