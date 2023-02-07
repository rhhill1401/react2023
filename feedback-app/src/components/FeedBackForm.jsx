import React from 'react';

import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import Rating from '../components/Rating.jsx';
import { useState } from 'react';
function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('This is a test');
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const handleTextChange = e => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        description,
        text,
        rating,
      };

      handleAdd(newFeedback);
      setText('');
    }
  };
  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How you rate your service with us</h2>
          <Rating select={rating => setRating(rating)} />
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
              value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
