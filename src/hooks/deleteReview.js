import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const deleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);
  
    const deleteReview = async (variables) => {
      const response = await mutate({ variables });
  
      return response;
    };
  
    return [deleteReview, result];
  };
  
  export default deleteReview;