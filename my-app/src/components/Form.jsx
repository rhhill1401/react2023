import { useState } from 'react';
import { useContext } from 'react';

import ProductTileContext from '../context/ProductTileContext.js';
import { v4 as uuidv4 } from 'uuid';
import FormCard from '../shared/FormCard';

function Form({ reverse, dark }) {
  const { content, setContent } = useContext(ProductTileContext);
  const [message, setMessage] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(dark);

  const addTile = (newTile) => {
    newTile.id = uuidv4();
    setContent([newTile, ...content]);
  };

  const descriptionValue = (e) => {
    inputValue(e, description, setDescription);
  };
  const imageValue = (e) => {
    inputValue(e, image, setImage);
  };
  const priceValue = (e) => {
    inputValue(e, price, setPrice);
  };

  const handleChange = (e) => {
    if (price.trim().length > 4) e.preventDefault();

    const newTile = {
      image,
      description,
      price,
    };

    setDescription('');
    setPrice('');
    setImage('');
    addTile(newTile);
  };

  const inputValue = (e, value1, value2) => {
    if (value1 === ' ') {
      setMessage(null);
      setBtnDisabled(dark);
    } else if (value1 === '' && value1.trim().length < 10) {
      setMessage(null);
      setBtnDisabled(dark);
    } else {
      setBtnDisabled();
    }
    value2(e.target.value);
  };

  return (
    <div>
      <FormCard className='formBox' reverse={dark}>
        <form className='input-group' onSubmit={handleChange}>
          <input
            onChange={imageValue}
            name='image'
            placeholder='Enter in URL'
            value={image}
          />
          <input
            onChange={descriptionValue}
            name='description'
            placeholder='Enter in description'
            value={description}
          />
          <input
            onChange={priceValue}
            name='price'
            placeholder='Enter in price'
            value={price}
          />
          {<div className='message'>{message}</div>}
          <button disabled={btnDisabled} className='btn btn-primary'>
            Submit
          </button>
        </form>
      </FormCard>
    </div>
  );
}

Form.defaultProps = {
  variation: 'primary',
};
export default Form;
