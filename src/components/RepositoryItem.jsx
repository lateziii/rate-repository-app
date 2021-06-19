import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { useHistory } from 'react-router-native';



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
      desc: {
        flexGrow: 10,
          flexDirection: 'row',
          fontSize: 14,
          alignSelf: 'center',
          justifyContent: 'center'
      }

    // ...
  });

const RepositoryItem = (props) => {
  if(props.repo === undefined) {
    return(<Text>en tiedä</Text>);
  }
  const history = useHistory();
  const handleHistory = () => {
    history.push(props.repo.id);
  };
    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.header}>
                <Image style={styles.logo} source={{
            uri: props.repo.ownerAvatarUrl,
            }}/>
            <Text testID={`name/${props.repo.id}`} style={styles.h1}>   {props.repo.fullName}</Text>
            <Text></Text>
            <Button title='More details' onPress={handleHistory}></Button>
                </Text>
                <Text style={styles.desc}>{props.repo.description}</Text>
                
            
            </View>
            <View style={styles.button}><Button testID={`language/${props.repo.id}`} style={styles.button} title={props.repo.language}></Button></View>
            <Text style={styles.info} key={props.repo.id}>
                <Text style={styles.colBold}>Stars  </Text>
                <Text style={styles.colBold}>Forks  </Text>
                <Text  style={styles.colBold}>Reviews  </Text>
                <Text  style={styles.colBold}>Rating </Text>
                {'\n'}
            </Text>
            <Text style={styles.row}>  
                <Text testID={`stars/${props.repo.id}`} style={styles.col}>{props.repo.stargazersCount}   </Text>
                <Text testID={`forks/${props.repo.id}`} style={styles.col}>{props.repo.forksCount}   </Text>
                <Text testID={`reviews/${props.repo.id}`} style={styles.col}>{props.repo.reviewCount}   </Text>
                <Text testID={`rating/${props.repo.id}`}style={styles.col}>{props.repo.ratingAverage}   </Text>
            </Text>

            
        </View>);
};

export default RepositoryItem;