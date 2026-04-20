import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Movie({ user }) {
  const { id } = useParams();

  return (
    <div>
      <h2>Movie Detail (id: {id})</h2>
      <p>Placeholder for movie detail and reviews.</p>
      <Link to={`/movies/${id}/review`}>Add Review</Link>
    </div>
  );
}
