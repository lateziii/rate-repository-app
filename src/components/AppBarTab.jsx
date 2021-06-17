import React from 'react';
import {Pressable, StyleSheet, View, Button} from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Constants.statusBarHeight,
        backgroundColor: '#21292e',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: theme.colors.nav,
      },
  text: {
    color: theme.colors.nav
  }
});

const AppBarTab = (props) => {

    return(
        <View>
            <Pressable style={styles.container}>
                <View><Link to={props.link}><Text style={styles.text}>{props.title}</Text></Link></View>
            </Pressable>
        </View>
    );
};

export default AppBarTab;