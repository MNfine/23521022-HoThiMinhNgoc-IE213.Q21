import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (reviews) return;

    try {
      reviews = await conn
        .db(process.env.MOVIEREVIEWS_NS)
        .collection("reviews");
    } catch (e) {
      console.error(`cannot connect: ${e}`);
    }
  }

  static async addReview(movieId, user, review, date) {
    try {
      const doc = {
        name: user.name,
        user_id: user._id,
        review: review,
        date: date,
        movie_id: new ObjectId(movieId),
      };

      return await reviews.insertOne(doc);
    } catch (e) {
      return { error: e };
    }
  }

  static async updateReview(reviewId, userId, review, date) {
    try {
      return await reviews.updateOne(
        { _id: new ObjectId(reviewId), user_id: userId },
        { $set: { review: review, date: date } }
      );
    } catch (e) {
      return { error: e };
    }
  }

  static async deleteReview(reviewId, userId) {
    try {
      return await reviews.deleteOne({
        _id: new ObjectId(reviewId),
        user_id: userId,
      });
    } catch (e) {
      return { error: e };
    }
  }
}
