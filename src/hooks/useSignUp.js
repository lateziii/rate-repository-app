import {useMutation} from '@apollo/client';
import {SIGN_UP} from '../graphql/mutations';


const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP);

    

    const signUp = async ({ username, password }) => {
      // call the mutate function here with the right arguments
        const signUpData  = await mutate({ variables: {username, password}} );        
        return signUpData;

        
    };
    return [signUp, result];
  
    
  };

export default useSignUp;