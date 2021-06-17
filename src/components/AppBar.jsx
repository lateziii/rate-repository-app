import React from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import Text from './Text';
import theme from '../theme';
import { useApolloClient } from '@apollo/client';
import useCurrentUser from '../hooks/useCurrentUser';
 import useAuthStorage from '../hooks/useAuthStorage';
 import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#21292e',
    paddingBottom: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'center'
  },
  text: {
    color: theme.colors.nav
  },
  logOut: {
    flex: 1,
    position: 'absolute',
    paddingHorizontal: 100,
    marginHorizontal: 295
  }
  // ...
});


const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const user = useCurrentUser();
  const history = useHistory();
  console.log(user);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/signin');
};
  return (
    <View style={styles.container}>
            <ScrollView horizontal>
              <AppBarTab title={'Repositories'} link={'/'}></AppBarTab>
              {user === null ?
              <AppBarTab title={'Sign In'} link={'signin'}></AppBarTab>
              : <Button style={styles.logOut} title={'Sign out'} onPress={signOut}></Button>
              }
              
            </ScrollView>
    </View>);
};

export default AppBar;