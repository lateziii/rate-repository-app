import { useMutation } from '@apollo/client';

import { CREATE_REVIEW } from '../graphql/mutations';

const createReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
      console.log(repositoryName);
      try {
        const response = await mutate({
            variables: { repositoryName, ownerName, rating: Number(rating), text },
          });
          return response.data.createReview;
      } catch (error) {
          console.log('error: ', error);
      }
  };

  return [createReview, result];
};

export default createReview;