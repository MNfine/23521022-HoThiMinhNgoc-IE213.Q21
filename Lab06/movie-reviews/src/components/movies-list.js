import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import MovieDataService from '../services/movies';

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchRating, setSearchRating] = useState('All Ratings');
  const [ratings, setRatings] = useState(['All Ratings']);
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [currentSearchMode, setCurrentSearchMode] = useState('');

  const placeholder =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23888" font-family="Arial" font-size="20">No Image</text></svg>';

  const retrieveMovies = useCallback((page = currentPage) => {
    setCurrentSearchMode('');
    MovieDataService.getAll(page)
      .then((res) => {
        setMovies(res.data.movies || []);
        setCurrentPage(res.data.page ?? page);
        setEntriesPerPage(res.data.entries_per_page || 0);
      })
      .catch(() => {
        setMovies([]);
      });
  }, [currentPage]);

  useEffect(() => {
    retrieveMovies();
    retrieveRatings();
  }, [retrieveMovies]);

  useEffect(() => {
    setCurrentPage(0);
  }, [currentSearchMode]);

  function retrieveRatings() {
    MovieDataService.getRatings()
      .then((res) => {
        setRatings(['All Ratings', ...(res.data || [])]);
      })
      .catch(() => {
        setRatings(['All Ratings']);
      });
  }

  function onChangeSearchTitle(e) {
    setSearchTitle(e.target.value);
  }

  function onChangeSearchRating(e) {
    setSearchRating(e.target.value);
  }

  const find = useCallback((query, by, page = currentPage) => {
    MovieDataService.find(query, by, page)
      .then((res) => {
        setMovies(res.data.movies || []);
      })
      .catch(() => {
        setMovies([]);
      });
  }, [currentPage]);

  const findByTitle = useCallback((page = 0) => {
    setCurrentSearchMode('findByTitle');
    find(searchTitle, 'title', page);
  }, [find, searchTitle]);

  const findByRating = useCallback((page = 0) => {
    setCurrentSearchMode('findByRating');
    if (searchRating === 'All Ratings') {
      retrieveMovies(page);
    }
    else {
      find(searchRating, 'rated', page);
    }
  }, [find, retrieveMovies, searchRating]);

  const retrieveNextPage = useCallback(() => {
    if (currentSearchMode === 'findByTitle') {
      findByTitle(currentPage);
    }
    else if (currentSearchMode === 'findByRating') {
      findByRating(currentPage);
    }
    else {
      retrieveMovies(currentPage);
    }
  }, [currentPage, currentSearchMode, findByRating, findByTitle, retrieveMovies]);

  useEffect(() => {
    retrieveNextPage();
  }, [currentPage, retrieveNextPage]);

  return (
    <div>
      <h2 className="text-center mt-4">Movies List</h2>
      <Form className="mb-4">
        <Row className="g-2 align-items-end">
          <Col xs={12} md={5}>
            <Form.Group>
              <Form.Label>Search by title</Form.Label>
              <Form.Control
                type="text"
                value={searchTitle}
                onChange={onChangeSearchTitle}
                placeholder="Type a movie title"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Select value={searchRating} onChange={onChangeSearchRating}>
                {ratings.map((rating) => (
                  <option value={rating} key={rating}>
                    {rating}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <div className="d-flex gap-2 flex-wrap">
              <Button variant="primary" onClick={() => findByTitle(0)}>
                Search Title
              </Button>
              <Button variant="outline-secondary" onClick={() => findByRating(0)}>
                Filter Rating
              </Button>
            </div>
          </Col>
        </Row>
      </Form>

      <Row className="g-3">
        {movies.length === 0 && <p>No movies found.</p>}
        {movies.map((movie) => (
          <Col xs={12} md={6} lg={4} key={movie._id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={(movie.poster || '') + '/100px180'}
                alt={movie.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.plot}</Card.Text>
                <Link to={`/movies/${movie._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-4 d-flex align-items-center gap-3 flex-wrap">
        <div>Showing page: {currentPage}.</div>
        <Button variant="link" onClick={() => setCurrentPage(currentPage + 1)}>
          Get next {entriesPerPage} results
        </Button>
      </div>
    </div>
  );
}
