import { FaTimes } from 'react-icons/fa';
import Card from '../shared/Card';
import { useContext } from 'react';
import ProductTileContext from '../context/ProductTileContext';

function ProductTile({ dark, setMode }) {
  const { content, setContent } = useContext(ProductTileContext);
  const handleMode = () => setMode(!dark);
  const deleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete'))
      setContent(content.filter((item) => item.id !== id));
  };

  return (
    <div className='product-container'>
      <div className='prow1'>
        {content.map((item) => {
          return (
            <Card reverse={dark} key={item.id}>
              <img className='item item1' src={item.image} alt={item.title} />
              <p className='item item2'>{item.description}</p>
              <p className='item item3'>{item.price}</p>
              <button className='close' onClick={() => deleteItem(item.id)}>
                <FaTimes style={{ color: dark ? '#333078' : 'white' }} />
              </button>
            </Card>
          );
        })}
      </div>
      <div className='prow2'>
        <button onClick={handleMode}>DarkMode</button>
      </div>
    </div>
  );
}

export default ProductTile;
