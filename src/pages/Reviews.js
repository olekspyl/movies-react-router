import axios from "axios";
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewAuthor, ReviewItem } from "components/App.styled";


const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=542013762b3531b404b15130444dfd0b`).then(
            response => setReviews(response.data.results)
        ).catch(error => console.log(error));
    
    }, [movieId]);
 
      if (!reviews) {
           return; 
    } 

    const unpackedReviews = () => reviews.map(review => {
            return <ul key={review.id}>
                <ReviewItem>
                    <ReviewAuthor>{review.author}</ReviewAuthor>
                    <p>{review.content}</p>
                </ReviewItem>
            </ul>
       
    }); 

  
 
        
    return (
        <div>
            {reviews ? (<p>Sorry, there is no review for this movie</p>) : unpackedReviews()}
    </div>
        
        
        
    )
}
     
export default Reviews;