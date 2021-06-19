import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Button from './Button';
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
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'center'
  },
  text: {
    color: theme.colors.nav
  },
  button:{
    alignItems: 'center',
    color: theme.colors.nav

  },
  right: {
    flexGrow: 2,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // ...
});


const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const user = useCurrentUser();
  const history = useHistory();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/signin');
  };
  if(user === null ) {
    return(
      <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title={'Repositories'}  link={'/'}></AppBarTab>
        <AppBarTab  title={'Sign In'} link={'signin'}></AppBarTab>
        <AppBarTab  title={'Sign Up'} link={'signup'}></AppBarTab>

        
      </ScrollView>
      </View>);
  }
  return (
    <View style={styles.container}>
            <ScrollView horizontal>
              <AppBarTab title={'Repositories'}  link={'/'}></AppBarTab>
              <AppBarTab title='Send Review' link={'review'}/>
              <AppBarTab title='My Reviews' link={'myreviews'}/>
              <View style={styles.right}><Pressable style={styles.tabContainer} onPress={signOut}><Text style={styles.button}>Sign out</Text></Pressable></View>

              
            
            </ScrollView>
    </View>);
};

export default AppBar;