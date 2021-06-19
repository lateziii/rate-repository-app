import { useQuery } from '@apollo/client';
import { GET_REPOS } from '../graphql/queries';
import { useDebounce } from 'use-debounce';


const useRepositories = ({order, searchQuery, first}) => {
    const [searchValue] = useDebounce(searchQuery, 500);
    const findOrder = (order) => {
        switch (order) {
          case 'latest': {
            return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
          }
          case 'highest': {
            return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
          }
          case 'lowest': {
            return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
          }
          default: {
            return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
          }
        }
      };
      const variables = {...findOrder(order), searchKeyword: searchValue, first};
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOS, {variables,
        fetchPolicy: 'cache-and-network',
    });
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
          return;
        }
    
        fetchMore({
          variables: {
            after: data.repositories.pageInfo.endCursor,
            ...variables,
          },
        });
      };



    return { repositories: data ? data.repositories : undefined, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;