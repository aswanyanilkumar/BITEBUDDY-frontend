//src/components/ReviewSection.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';

const ReviewSection = ({ foodItemId }) => {
  const { user } = useUser();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch existing reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`/review/${foodItemId}`);
        setReviews(res.data);
      } catch (err) {
        console.error("Error loading reviews", err);
      }
    };
    fetchReviews();
  }, [foodItemId]);

  // Submit review
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Login required to submit a review");
    try {
      setLoading(true);
      await axios.post(
        '/api/reviews/submit',
        { foodItemId, rating, comment },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setComment('');
      setRating(5);
      const res = await axios.get(`/api/reviews/${foodItemId}`);
      setReviews(res.data);
    } catch (err) {
      alert("Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-500 mb-4">No reviews yet. Be the first!</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((r) => (
            <li key={r._id} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{r.user?.name || "Anonymous"}</span>
                <span className="text-yellow-500">{'⭐'.repeat(r.rating)}</span>
              </div>
              <p className="text-gray-700">{r.comment}</p>
            </li>
          ))}
        </ul>
      )}

      {user && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <label className="block">
            <span className="text-gray-700">Rating</span>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="block w-full mt-1 rounded-xl border-gray-300 shadow-sm"
            >
              {[5, 4, 3, 2, 1].map((val) => (
                <option key={val} value={val}>
                  {val} Star{val > 1 && 's'}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Comment</span>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-full mt-1 rounded-xl border-gray-300 shadow-sm"
              rows={3}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewSection;
