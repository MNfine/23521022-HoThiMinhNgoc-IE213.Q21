import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import MovieDataService from "../services/movies";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("All Ratings");
  const [ratings, setRatings] = useState(["All Ratings"]);

  const placeholder =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23888" font-family="Arial" font-size="20">No Image</text></svg>';

  useEffect(() => {
    retrieveMovies();
    retrieveRatings();
  }, []);

  function retrieveMovies() {
    MovieDataService.getAll()
      .then((res) => {
        setMovies(res.data.movies || []);
      })
      .catch(() => {
        setMovies([]);
      });
  }

  function retrieveRatings() {
    MovieDataService.getRatings()
      .then((res) => {
        setRatings(["All Ratings", ...(res.data || [])]);
      })
      .catch(() => {
        setRatings(["All Ratings"]);
      });
  }

  function onChangeSearchTitle(e) {
    setSearchTitle(e.target.value);
  }

  function onChangeSearchRating(e) {
    setSearchRating(e.target.value);
  }

  function findByTitle() {
    if (!searchTitle.trim()) {
      retrieveMovies();
      return;
    }

    MovieDataService.find(searchTitle, "title")
      .then((res) => {
        setMovies(res.data.movies || []);
      })
      .catch(() => {
        setMovies([]);
      });
  }

  function findByRating() {
    if (searchRating === "All Ratings") {
      retrieveMovies();
      return;
    }

    MovieDataService.find(searchRating, "rated")
      .then((res) => {
        setMovies(res.data.movies || []);
      })
      .catch(() => {
        setMovies([]);
      });
  }

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
            <div className="d-flex gap-2">
              <Button variant="primary" onClick={findByTitle}>
                Search Title
              </Button>
              <Button variant="outline-secondary" onClick={findByRating}>
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
                src={(movie.poster || "") + "/100px180"}
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
    </div>
  );
}
