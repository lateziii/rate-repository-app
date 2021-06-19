import React from 'react';
import { FlatList } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

export const RepositoryListContainer = ({ repositories }) => {
  
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
  
    return (
      <FlatList
        data={repositoryNodes}
        renderItem={(item => <RepositoryItem key ={item.item.id} repo={item }></RepositoryItem>)}
      />
    );
};
  
const RepositoryList = () => {
    const { repositories } = useRepositories();
  
    return <RepositoryListContainer repositories={repositories} />;
  };
  
  export default RepositoryList;