import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#21292e',
    paddingBottom: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-evenly'
  },
  text: {
    color: theme.colors.nav
  }
  // ...
});


const AppBar = () => {
  return (
    <View style={styles.container}>
            <ScrollView horizontal>
              <AppBarTab title={'Repositorioes'} link={'/'}></AppBarTab>
              <AppBarTab title={'Sign In'} link={'signin'}></AppBarTab>
            </ScrollView>
    </View>);
};

export default AppBar;