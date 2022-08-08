import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';

function App() {
  const [OrderID, setOrderID] = useState([])
  const OrderIDref = useRef()

  function handleOrder(e){
    const order = OrderIDref.current.value
    const query = "/" + order.toString()
    fetch(query).then((res) =>
      res.json().then((data) => {
        setOrderID(data)
        console.log(data)
        console.log(OrderID)
        console.log(Object.keys(OrderID).length)
      })
    );
    console.log(order)
    OrderIDref.current.value = null
  }

  return (
    <div>
      <input ref = {OrderIDref} type="number"/>
      <button onClick={handleOrder}>Search Order</button>
      <ul>
        {(() => {
          let orders = []
          for (let i = 0; i < Object.keys(OrderID).length; i++){
            orders.push(<li><b>Reference:</b> {OrderID[i].Reference}  <b>Recieved Date</b>: {OrderID[i].RecievedDate}  <b>OrderStatus</b>: {OrderID[i].OrderStatus}</li>)
          }
          return orders
        })()}
      </ul>
    </div>
  );
}

export default App;
