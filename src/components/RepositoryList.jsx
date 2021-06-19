import React, {useState} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import RepositorySorter from './RepositorySorter';
import { Searchbar } from 'react-native-paper';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  styles: {
    paddingVertical: 10
  }
});

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const order = this.props.order;
    const setOrder = this.props.setOrder;
    const searchQuery= this.props.searchQuery;
    const onChangeSearch = query => this.props.setSearchQuery(query);
    const styles = StyleSheet.create({
      searchContainer: {
        margin: 15,
        marginBottom: 0,
      },
    });

    return (
      <View>
        <RepositorySorter order={order} setOrder={setOrder} ></RepositorySorter>
        <View style={styles.search}>
          <Searchbar
            placeholder='Search'
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
      </View>
    );
  };

  render() {
    const repositories = this.props.repositories;
    const onEndReach = this.props.onEndReach;

    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        renderItem={(({item}) => <RepositoryItem key ={item.id} repo={item }></RepositoryItem>)}
        keyExtractor={(item) => item.id}
        onEndReach={onEndReach}
        onEndReachThreshold={0.5}
      />
    );
  }

}



const RepositoryList = () => { 
  const [order, setOrder] = useState(''); 
  const [searchQuery, setSearchQuery] = useState('');

  const onEndReach = () => {
    console.log('JIUU');
    fetchMore();
  };

  const { repositories, fetchMore } = useRepositories({order, searchQuery, first: 3});

  return (
    <View>
      <RepositoryListContainer
        repositories={repositories}
        onEndReach={fetchMore()}
        order={order}
        setOrder={setOrder}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </View>
  );
};

export default RepositoryList;