import { useState } from 'react';
import './App.css';
import './index.css'
import Button from './components/Button';
import Counter from './components/Countner';
// import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const intrementCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={intrementCount} />
      <Button onClick={intrementCount} />
      <Button onClick={intrementCount} />
      <Button onClick={intrementCount} />
    </div>
  );
}

export default App;
