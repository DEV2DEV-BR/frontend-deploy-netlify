import { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    async function loadData() {
      await api.get('/');
    }

    loadData();
  }, []);

  return (
    <div className='container'>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
