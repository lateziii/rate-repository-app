import {useMutation, useApolloClient} from '@apollo/client';
import {SIGN_IN} from '../graphql/mutations';
import { useHistory } from 'react-router-native';
import useAuthStorage from './useAuthStorage';
import { useContext } from 'react';

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const history = useHistory();
    

    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
        const signInData  = await mutate({ variables: {username, password}} );
        if (signInData.data.authorize) {
            await authStorage.setAccessToken(signInData.data.authorize.accessToken);
            apolloClient.resetStore();
            console.log('historiaa');
            history.push('/');
        }
        return signInData;

        
    };
    return [signIn, result];
  
    
  };

export default useSignIn;