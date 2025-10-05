import { useState } from 'react';
import './App.css';
import TheHeader from './components/TheHeader/TheHeader';
import TheFooter from './components/TheFooter/TheFooter';

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Services', url: '/services' },
  { name: 'Contact', url: '/contact' },
];

function App() {

const [counter, setCounter] = useState(0);
console.log(counter);

const handleCounter = (type, amount) => {
  if(type === 'Increment') {
    setCounter((preValue) => preValue + amount);
  } else if(type === 'Decrement') {
    setCounter((preValue) => preValue - amount);
  } else if(type === 'Reset') {
    setCounter(0);
  }
}


  return (
    <div className='app'>
      <TheHeader links={navLinks}/>
      <main>
        <section>
          <h1>{counter}</h1>
          <button onClick={() => handleCounter("Increment", 2)}>Increment</button>
          <button onClick={() => handleCounter("Decrement", 2)}>Decrement</button>
          <button onClick={() => handleCounter("Reset")}>Reset</button>
        </section>
      </main>
      <TheFooter />
    </div>
  );
}

export default App
