const ReviewCard = ({ review }) => (
    <div className="border-b py-2">
      <strong>{review.user?.name}</strong>: {review.comment} ({review.rating}⭐)
    </div>
  );
  
  export default ReviewCard;
  