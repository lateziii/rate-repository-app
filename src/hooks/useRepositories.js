import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOS } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);


    const { data, error, loading } = useQuery(GET_REPOS, {
        fetchPolicy: 'cache-and-network',
    });
    useEffect(() => {
        if (data) {
            setRepositories(data.repositories.edges.map(edge => edge.node));
        }
    }, [data]);

  return {repositories, loading, error};
};

export default useRepositories;