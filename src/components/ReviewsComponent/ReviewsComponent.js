import { ReviewAuthor, ReviewItem } from "components/App.styled";

const ReviewsComponent = ({reviews}) => {
   const  unpackedReviews = () => reviews.map(review => {
            return <ul key={review.id}>
                <ReviewItem>
                    <ReviewAuthor>{review.author}</ReviewAuthor>
                    <p>{review.content}</p>
                </ReviewItem>
            </ul>
    }); 

    return unpackedReviews();
}

export default ReviewsComponent;