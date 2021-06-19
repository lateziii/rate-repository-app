import { useQuery } from '@apollo/client';
import { GET_REPO } from '../graphql/queries';

const useRepository = ({id, first}) => {
    const variables = { id, first };

    const { data, loading, fetchMore, ...result} = useQuery(GET_REPO, {variables,
        fetchPolicy: 'cache-and-network',
    });
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
          return;
        }
    
        fetchMore({
          variables: {
            after: data.repository.reviews.pageInfo.endCursor,
            ...variables,
          },
        });
      };

    return { repository: data ? data.repository : undefined, fetchMore: handleFetchMore,  ...result };
};


export default useRepository;