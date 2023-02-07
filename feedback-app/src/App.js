import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx';
import Header from './components/Header.jsx';
import FeedBackList from './components/FeedBackList.jsx';
import FeedBackData from './data/FeedbackData';
import FeedBackForm from './components/FeedBackForm.jsx';
import FeedBackStats from './components/FeedBackStats.jsx';

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback.id);
  };
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <div className="container">
      <Header />

      <FeedBackForm handleAdd={addFeedback} />
      <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      <FeedBackStats feedback={feedback} />
    </div>
  );
}

export default App;
