import React from 'react';
import {View, Pressable, Button, StyleSheet} from 'react-native';
import FormikTextInput from './FormikTextInput';
import {Formik} from 'formik';
import * as yup from 'yup';

import Text from './Text';

const initialValues = {
    username: '',
    password: '',
};
const validationSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required'),
    password: yup.string()
        .required('Password is required'),
  });
const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 25,
        marginTop: 100,
        backgroundColor: 'white'
    }
  });

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
  return (

          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {({ handleSubmit }) =>
                <View style={styles.inputContainer}> 
                    <FormikTextInput name="username" placeholder="Username" />
                    <FormikTextInput name="password" placeholder="Password"/>
                    <Pressable style={{zIndex: 0.5, }} onPress={handleSubmit}>
                        <Button title='Login'/>
                    </Pressable>
                </View>
                 }
            </Formik>
    );
};

export default SignIn;