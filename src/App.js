import { useState } from 'react';
import './index.scss';

function App() {
 const [count, setCount] = useState(0)
  
 
 const onClickPlus = () => {
    setCount(count+1)
    console.log(count)
  }


  const onCliclMinus = () => {
    setCount(count-1)
  }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{ count }</h1>
        <button onClick = { onCliclMinus} className="minus">- Минус</button>
        <button onClick = { onClickPlus } className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
