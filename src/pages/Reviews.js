import axios from "axios";
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewsComponent from "components/ReviewsComponent";


const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=022b72fb5c3086143a7c2d5ac5a186e1`).then(
            response => setReviews(response.data.results)
        ).catch(error => console.log(error));
    
    }, [movieId]);
 
      if (!reviews) {
           return; 
    }; 
  
    return (
        <div>
            {reviews ? (<p>Sorry, there is no review for this movie</p>) : <ReviewsComponent reviews={reviews} />}
    </div>
        
        
        
    )
}
     
export default Reviews;
