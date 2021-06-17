import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'white',
      paddingBottom: Constants.statusBarHeight
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginHorizontal: 50
      },
    flexItemA: {
        flexGrow: 0,
        paddingHorizontal: Constants.statusBarHeight
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
      flexItemB: {
        flexGrow: 1,
      },
    logo: {
        flexGrow: 0,
        borderRadius: 5,
        width: 132,
        height: 116,
    },
    button: {
        flexGrow: 0,
        alignSelf: 'center',
        borderRadius: 13,
        width: 150,
        height: 50,
    },
      h1: {
          flexGrow: 10,
          flexDirection: 'row',
          fontWeight: 'bold',
          fontSize: 24,
          alignSelf: 'center',
          justifyContent: 'center'
      },
      bold: {
        fontWeight: 'bold'
      }

    // ...
  });

const RepositoryItem = (props) => {
    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.header}>
                <Image style={styles.logo} source={{
            uri: props.repo.item.ownerAvatarUrl,
            }}/>
            <Text style={styles.h1}>   {props.repo.item.fullName}</Text>
                </Text>
            
            </View>
            <View style={styles.button}><Button style={styles.button} title={props.repo.item.language}></Button></View>
            <Text style={styles.info} key={props.repo.item.id}>
                <Text style={styles.flexItemA}><Text style={styles.bold}>Stars</Text>
                {'\n'}
                {'\n'}
                {props.repo.item.stargazersCount}
                {'\n'}
                </Text>
                <Text style={styles.flexItemA}>
                <Text style={styles.bold}>Forks</Text>
                {'\n'}
                {'\n'}
                {props.repo.item.forksCount}
                {'\n'}
                </Text>
                <Text style={styles.flexItemA}>
                  <Text style={styles.bold}>Reviews</Text>
                {'\n'}
                {'\n'}
                {props.repo.item.reviewCount}
                {'\n'}
                </Text>
                <Text style={styles.flexItemA}>
                <Text style={styles.bold}>Rating</Text>
                {'\n'}
                {'\n'}
                {props.repo.item.ratingAverage} 
                {'\n'}
                </Text>
            </Text>
            
        </View>);
};

export default RepositoryItem;