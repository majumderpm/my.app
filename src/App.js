import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const product = [
  //   {name: 'Watch', price: '5000'},
  //   {name: 'Phone', price: '25000'},
  //   {name: 'laptop', price: '1,75000'},
  //   {name: 'Tab', price: '35000'},
  // ]
  return (
    <div className="App">
      {/* {
        product.map(product => <Product name={product.name}></Product>)
      } */}
      {/* <Product name='Laptop' price="1,75000"></Product>
      <Product name="Phone" price="75000"></Product>
      <Product name="Watch(Titan Raga)" price="10000"></Product> */}

      {/* <Counter></Counter> */}

      <ExternalUser></ExternalUser>


    </div>
  );
}


function ExternalUser (){
  const [users, setUsers] = useState([]);
  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  }, [])
  return (
    <div>
      <h3>External User</h3>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
    
  )
}
function User(props){
  return(
    <div style={{border:'1px solid #000', margin: ' 30px auto', padding: '30px', width: '50%', textAlign: 'center'}}>
      <h3>Name: {props.name}</h3>
      <p>E-mail: {props.email}</p>
    </div>
  )
}

// function Product(props) {
//   return (
//     <div className='proaduct'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price} </p>
//       <p></p>
//     </div>
//   )
// }
{/* <Decrease></Decrease> */}
function Counter (){


  const [count, setCount] = useState(60);
  // console.log(abc);
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const decreaseCount = () => setCount(count - 1);


  return (
    <div>
      <h1>count:{count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


export default App;
