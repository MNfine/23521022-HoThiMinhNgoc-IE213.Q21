import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import MovieDataService from "../services/movies";

export default function AddReview({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentReview = location.state?.currentReview;
  const [review, setReview] = useState(currentReview?.review || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to add a review.");
      navigate("/login");
      return;
    }

    if (currentReview) {
      MovieDataService.updateReview({
        review: review,
        user_id: user.id,
        review_id: currentReview._id,
      })
        .then(() => {
          navigate(`/movies/${id}`);
        })
        .catch(() => {
          navigate(`/movies/${id}`);
        });
      return;
    }

    MovieDataService.createReview({
      review: review,
      name: user.name,
      user_id: user.id,
      movie_id: id,
    })
      .then(() => {
        navigate(`/movies/${id}`);
      })
      .catch(() => {
        navigate(`/movies/${id}`);
      });
  }

  return (
    <div>
      <h2>{currentReview ? "Edit" : "Add"} Review</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
