import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/movies')
      .then(res => {
        setMovies(res.data.movies || []);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load movies list');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading movies list...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="text-center mt-4">Movies List</h2>
      <div className="row justify-content-center">
        {movies.length === 0 && <p>No movies found.</p>}
        {movies.map(movie => (
          <div className="col-8 col-md-6 col-lg-4 mb-3" key={movie._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.plot}</p>
                <Link to={`/movies/${movie._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
