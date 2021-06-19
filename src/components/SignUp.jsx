import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import Button from './Button';
import FormikTextInput from './FormikTextInput';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup
  .string().required('Username is required')
  .min(1, '1-30 chars')
  .max(30, '1-30 chars'),
  password: yup.string().required('Password is required')
  .min(1, '5-50 chars')
  .max(30, '5-50 chars'),
  passwordConfirmation: yup.string().required('Password must be confirmed')
  .min(1, '5-50 chars')
  .max(30, '5-50 chars')
  .oneOf([yup.ref('password'), null], 'Password confirmation must match to password')

});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="username" placeholder="Username" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          secureTextEntry
        />
      </View>
      <Button onPress={onSubmit}>Sign in</Button>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    const response = await signUp({ username, password });
    if(response.data) {
        await signIn({ username, password });
    }
    
    history.push('/');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;