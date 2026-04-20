import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function AddReview({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      alert('You must be logged in to add a review.');
      navigate('/login');
      return;
    }
    alert(`Submitting review for movie ${id}: ${review}`);
    navigate(`/movies/${id}`);
  }

  return (
    <div>
      <h2>Add Review for Movie {id}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Review</label>
          <br />
          <textarea value={review} onChange={(e) => setReview(e.target.value)} rows="4" cols="50" />
        </div>
        <div style={{ marginTop: '8px' }}>
          <button type="submit">Submit Review</button>
        </div>
      </form>
    </div>
  );
}
