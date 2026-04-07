import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {
  static async apiPostReview(req, res, next) {
    try {
      const movieId = req.body.movie_id;
      const review = req.body.review;

      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
      };

      const date = new Date();

      const result = await ReviewsDAO.addReview(movieId, userInfo, review, date);

      if (result.error) {
        res.status(500).json({ error: result.error.message || result.error });
      } else {
        res.json({ status: "success", review_id: result.insertedId });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateReview(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const review = req.body.review;
      const date = new Date();

      const response = await ReviewsDAO.updateReview(
        reviewId,
        req.body.user_id,
        review,
        date
      );

      if (response.modifiedCount === 0) {
        throw new Error("cannot update review");
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const userId = req.body.user_id;

      await ReviewsDAO.deleteReview(reviewId, userId);

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
