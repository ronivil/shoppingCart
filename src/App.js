import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios"

function App() {
  const [list, setList] = useState([]);
  const [items, setItems] = useState([]);
  const [clicks, setClicks] = useState(0)
  const [count, setCount] = useState(0);
  const children = [null, 'Rachel', 'Joey', 'Chandler', 'Ross', 'Monica']

  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/carts?limit=5');
    const resItems = await axios.get('https://fakestoreapi.com/products');

    setItems(resItems.data)
    setList(response.data);

    
    console.log(list)
  };

  const increase = () => {
    console.log(list.products.map)
      
  }
  const decrease = () => {
    setClicks(clicks - 1);
    console.log(clicks)
  }
 /*  let test = items.title
  
  useEffect(() => {
    if (list.hasOwnProperty(test)) {
      var value = list[test]
      console.log(value)
      
    }  
  }) */

  return (
    <div className="App">
      <h1>Carts</h1>

      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      <div className="carts">
        {list &&
          list.map((list, index) => {
            
            return (
              <div className="list" key={index}>
                <h3>{children[list.id] + "'s cart!"}</h3>
                <h2>{list.id}</h2>

                <div className="details">
                  <p>{list.userId}</p>
                  <p>{list.date}</p>
                  <p>{list.products.map((item) => {
                    return <p>{item.quantity = item.quantity + 1}</p>
                    })}
                    </p>
                    
                      <button className="fetch-button" onClick={increase}>
                        +
                  </button>
                  <button className="fetch-button" onClick={decrease}>
                        -
                  </button>

                  <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={() => setCount(count - 1)}>
        Click me
      </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
/* 

import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios"

function App() {
  const [list, setList] = useState([]);
  const [items, setItems] = useState([]);
  const [clicks, setClicks] = useState(0)
  const [count, setCount] = useState();
  const children = [null, 'Rachel', 'Joey', 'Chandler', 'Ross', 'Monica']

  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/carts?limit=5');
    const resItems = await axios.get('https://fakestoreapi.com/products');

    setItems(resItems.data)
    setList(response.data);

    
    console.log(list)
  };

  const increase = () => {
    console.log(list.products.map)
      
  }
  const decrease = () => {
    setClicks(clicks - 1);
    console.log(clicks)
  }
   let test = items.title
  
  useEffect(() => {
    if (list.hasOwnProperty(test)) {
      var value = list[test]
      console.log(value)
      
    }  
  }) 

  return (
    <div className="App">
      <h1>Carts</h1>

      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      <div className="carts">
        {list &&
          list.map((list, index) => {
            
            return (
              <div className="list" key={index}>
                <h3>{children[list.id] + "'s cart!"}</h3>
                <h2>{list.id}</h2>

                <div className="details">
                  <p>{list.userId}</p>
                  <p>{list.date}</p>
                  <p>{list.products.map((item) => {
                    console.log(list)
                    return <p>{item.quantity = item.quantity + 1}</p>
                    })}
                    </p>

                  <button onClick={() => setCount(count + 1)}>
                    Click me
                  </button>

                  <button onClick={() => setCount()}>
                    Click me
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App; */