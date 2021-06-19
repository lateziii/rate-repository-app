import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useUserReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { data, refetch } = useQuery(GET_USER, {variables: {includeReviews: true}});
    
     useEffect(() => {
         if (data) {
             setReviews(data.authorizedUser.reviews.edges);
         }
     }, [data]);
     return reviews;
};

export default useUserReviews;