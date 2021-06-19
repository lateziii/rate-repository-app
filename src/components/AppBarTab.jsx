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
      },
      tabContainer: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      tab: {
        flexGrow: 0
      },
  text: {
    color: theme.colors.nav
  }
});

const AppBarTab = (props) => {

    return(
      <Pressable style={styles.tab} onPress={props.onPress}>
        <View style={styles.tabContainer}>
          <Link to={props.link}><Text style={styles.text}>{props.title}</Text></Link>
        </View>
      </Pressable>
    );
};

export default AppBarTab;