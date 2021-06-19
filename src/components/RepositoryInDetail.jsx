import React from 'react';
import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import * as Linking from 'expo-linking';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingBottom: 15,
    marginBottom: 15
  },
  rating: {
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    margin: 25,
    padding: 15,
    alignItems: 'center',
    borderColor: 'blue'
  },
  containerBody: {
    margin: 15,
    marginLeft: 0,
    width: '80%'
  },
  title: {
    marginVertical: 5,
    fontWeight: 'bold'
  },
  textRating: {

  },
  textName: {
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    zIndex: 0,
    alignItems: "center",
    justifyContent: 'center',
    height: 50
  }
});

const ReviewItem = ({ review }) => {
  
    return (
      <View style={styles.reviewContainer}>
        <View style={styles.rating}>
          <Text style={styles.textRating}>{review.rating}</Text>
        </View>
        <View style={styles.containerBody}>
          <View style={styles.containerTitle}>
            <Text style={styles.textName}>{review.user.username}</Text>
            <Text>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
          </View>
          <Text color='primary'>{review.text}</Text>
        </View>
      </View>
    );
  };
const RepositoryInDetail = () => {

    const handlePress = () =>{
        Linking.openURL(repository.url);
    };

    const { id } = useParams();
    const { repository, fetchMore } = useRepository({id, first: 3 });
    console.log(repository);
    if(repository === undefined ) {
        return <Text>höh</Text>;
    }
    const reviews = repository.reviews.edges
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];
    return (
        <View><RepositoryItem repo={repository}> </RepositoryItem>
        <View><Pressable style={styles.button} onPress={handlePress}><Text>View on github</Text></Pressable></View>
        <FlatList
      data={reviews}
      ItemSeparatorComponent={() => <View  />}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReach={fetchMore()}
    /></View>
        
    );
};

export default RepositoryInDetail;