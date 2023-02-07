import './index.css';
import Header from './components/Header.jsx';
import ProductTile from './components/ProductTile.jsx';
import { useState } from 'react';
import Form from './components/Form.jsx';
import { ProductTileProvider } from './context/ProductTileContext';
import { useQuery, useMutation } from '@tanstack/react-query';

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 1, title: 'Post 2' },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });
  if (postsQuery.isLoading) return <h1>Loading....</h1>;
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }
  return (
    <ProductTileProvider>
      <div className='container'>
        <div className='sub-container'>
          <div className='row1'>
            <Header />
          </div>
          <div className='row2'>
            <Form dark={darkMode} setMode={setDarkMode} />
          </div>
          <div className='row3'>
            <ProductTile dark={darkMode} setMode={setDarkMode} />
          </div>
        </div>
      </div>
    </ProductTileProvider>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
export default App;
