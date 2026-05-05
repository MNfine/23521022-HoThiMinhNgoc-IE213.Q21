import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Image, Row, Col } from "react-bootstrap";
import moment from "moment";
import MovieDataService from "../services/movies";

export default function Movie({ user, match }) {
  const params = useParams();
  const id = match?.params?.id ?? params.id;
  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    plot: "",
    poster: "",
    reviews: [],
  });

  useEffect(() => {
    getMovie(id);
  }, [id]);

  function getMovie(movieId) {
    if (!movieId) {
      return;
    }

    MovieDataService.get(movieId)
      .then((res) => {
        setMovie(res.data);
      })
      .catch(() => {
        setMovie({
          id: null,
          title: "",
          rated: "",
          plot: "",
          poster: "",
          reviews: [],
        });
      });
  }

  function deleteReview(reviewId) {
    if (!user) {
      return;
    }

    MovieDataService.deleteReview(reviewId, user.id)
      .then(() => {
        getMovie(id);
      })
      .catch(() => {
        getMovie(id);
      });
  }

  const placeholder =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23888" font-family="Arial" font-size="20">No Image</text></svg>';

  return (
    <div>
      <Card className="mb-4">
        <Card.Body>
          <Row className="g-4">
            <Col xs={12} md={4}>
              <Image
                src={movie.poster || placeholder}
                alt={movie.title}
                fluid
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </Col>
            <Col xs={12} md={8}>
              <h3>{movie.title}</h3>
              <h6 className="text-muted mb-3">Rated: {movie.rated || "N/A"}</h6>
              <p>{movie.plot}</p>
              {user && (
                <Link to={`/movies/${id}/review`} className="btn btn-primary mb-4">
                  Add Review
                </Link>
              )}

              <h4>Reviews</h4>
              {movie.reviews && movie.reviews.length === 0 && <p>No reviews yet.</p>}
              {movie.reviews &&
                movie.reviews.map((review) => (
                  <Card className="mb-3" key={review._id}>
                    <Card.Body>
                      <Card.Title>{review.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {moment(review.date).format("Do MMMM YYYY")}
                      </Card.Subtitle>
                      <Card.Text>{review.review}</Card.Text>
                      {user && user.id === review.user_id && (
                        <div className="d-flex gap-2">
                          <Link
                            to={`/movies/${id}/review`}
                            state={{ currentReview: review }}
                            className="btn btn-sm btn-outline-primary"
                          >
                            Edit
                          </Link>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => deleteReview(review._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
