import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryInDetail from './RepositoryInDetail';
import Review from './ReviewForm';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e6e5e1'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
      <Route exact path='/review'>
          <Review/>
        </Route>
        <Route exact path='/myreviews'>
          <MyReviews/>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>
        <Route path='/signup'>
          <SignUp></SignUp>
        </Route>
      <Route exact path='/:id' >
          <RepositoryInDetail/>
      </Route>
        <Route exact path='/'>
          <RepositoryList/>
        </Route>
        
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;