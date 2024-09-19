
import { useState, useEffect } from 'react';
import { Reviews } from '@/types/reviewTypes';

const reviewsUrl = '/api/reviews';

export const ReviewsInfo = () => {
  const [reviews, setReviews] = useState<Reviews[]>([]);
  const [selectedReview, setSelectedReview] = useState<Reviews | null>(null); // 선택된 리뷰
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('Fetching books data');
    const fetchReviews = async () => {
      try {
        const response = await fetch(reviewsUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Reviews[] = await response.json();
        setReviews(data);
        if (data.length > 0) {
          setSelectedReview(data[0]);
        }
      } catch (error) {
        setError((error as Error).message);
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // 책을 선택하는 함수
  const selectReview = (review: Reviews) => {
    setSelectedReview(review);
  };

  return { reviews, selectedReview, selectReview, error, loading };
};
