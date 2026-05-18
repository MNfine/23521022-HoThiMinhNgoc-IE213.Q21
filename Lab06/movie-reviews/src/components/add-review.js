import React, { useState } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import MovieDataService from '../services/movies';
import { Form, Button } from 'react-bootstrap';

const AddReview = props => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  let editing = false;
  let initialReviewState = '';

  if (location.state && location.state.currentReview) {
    editing = true;
    initialReviewState = location.state.currentReview.review;
  }

  const [review, setReview] = useState(initialReviewState);
  const [submitted, setSubmitted] = useState(false);

  const onChangeReview = e => {
    setReview(e.target.value);
  };

  const saveReview = () => {
    if (!props.user) {
      navigate('/login');
      return;
    }

    var data = {
      review: review,
      name: props.user.name,
      user_id: props.user.id,
      movie_id: id
    };

    if (editing) {
      data.review_id = location.state.currentReview._id;
      MovieDataService.updateReview(data)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    else {
      MovieDataService.createReview(data)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <div className="mx-auto" style={{ maxWidth: '720px' }}>
      {submitted ? (
        <div>
          <h4>Review submitted successfully</h4>
          <Link to={'/movies/' + id}>Back to Movie</Link>
        </div>
      ) : (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{editing ? 'Edit' : 'Create'} Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              required
              value={review}
              onChange={onChangeReview}
            />
          </Form.Group>
          <Button variant="primary" onClick={saveReview}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default AddReview;
