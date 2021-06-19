import React from 'react';
import { Text, View, FlatList, StyleSheet, Pressable, Alert } from 'react-native';
import useUserReviews from '../hooks/useUserReviews';
import { useHistory } from 'react-router-native';
import deleteReview from '../hooks/deleteReview';
import { format } from 'date-fns';
import Button from './Button';

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
      marginHorizontal: 18,
      width: '70%'
    },
    title: {
      marginVertical: 5,
      fontWeight: 'bold'
    },
    textName: {
      color: 'black',
      fontWeight: 'bold'
    },
    buttons: {
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-evenly",
      fontSize: 16,
      color: 'white'
    },
    buttonB: {
      alignItems: "center",
      backgroundColor: 'blue',
      justifyContent: 'center',
      marginVertical: 10,
      height: 50,
      borderRadius: 5,
      width: 125,
      color: 'white'
    },
    buttonR: {
      backgroundColor: 'red',
      alignItems: "center",
      justifyContent: 'center',
      marginVertical: 10,
      height: 50,
      borderRadius: 5,
      width: 125,
      color: 'white'
    }
  });

const ReviewItem = ({review}) => {

    const history = useHistory();
    const [deleteR] = deleteReview();

    // refetch needed after remove
    const handleRemove = () => {
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete this review?',
            [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Delete',
                    onPress:  () => deleteR({ id: review.id })
                   
                },
            ]
        );
    };
  
    return (
      <View style={styles.reviewContainer}>
        <View style={styles.rating}>
          <Text style={styles.textRating}>{review.rating}</Text>
        </View>
        <View style={styles.containerBody}>
          <View style={styles.containerTitle}>
            <Text>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
          </View>
          <Text color='primary'>{review.text}</Text>
          <View style={styles.buttons}>
          <Pressable onPress={() => history.push(review.repositoryId)} style={styles.buttonB}><Text>View Repository</Text></Pressable>
        <Pressable onPress={handleRemove} style={styles.buttonR}><Text>Delete Review</Text></Pressable>
          </View>
        </View>
      </View>
      
    );
  };

const MyReviews = () => {
    const reviewEdges = useUserReviews();
    const reviewNodes = reviewEdges ? reviewEdges.map(edge => edge.node): [];

    return (<View>
        <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={() => <View  />}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
    </View>);
};

export default MyReviews;