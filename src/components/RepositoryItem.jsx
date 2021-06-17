import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'white',
      paddingBottom: Constants.statusBarHeight,
      marginBottom: 25
    },
    info: {
        display: 'flex',
        marginHorizontal: 50,
    },
    row: {
      display: 'flex',
      marginHorizontal: 50
    },
    col: {
      flex: 1
    },
    colBold: {
      flex: 1,
      marginVertical: Constants.statusBarHeight,
      fontWeight: 'bold'
    },
    flexItemA: {
        flexGrow: 0,
        paddingHorizontal: Constants.statusBarHeight,
        fontWeight: 'bold'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
      flexItemB: {
        flexGrow: 0,
        paddingHorizontal: Constants.statusBarHeight,
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
                <Text style={styles.colBold}>Stars  </Text>
                <Text style={styles.colBold}>Forks  </Text>
                <Text style={styles.colBold}>Reviews  </Text>
                <Text style={styles.colBold}>Rating </Text>
                {'\n'}
            </Text>
            <Text style={styles.row}>  
                <Text style={styles.col}>{props.repo.item.stargazersCount}   </Text>
                <Text style={styles.col}>{props.repo.item.forksCount}   </Text>
                <Text style={styles.col}>{props.repo.item.reviewCount}   </Text>
                <Text style={styles.col}>{props.repo.item.ratingAverage}   </Text>
            </Text>

            
        </View>);
};

export default RepositoryItem;