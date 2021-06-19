import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import Button from './Button';
import FormikTextInput from './FormikTextInput';
import createReview from '../hooks/createReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  errorStyle: {
    color: 'red',
    backgroundColor: 'yellow',
    paddingHorizontal: 15,
    fontSize: 20
  }
});

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: ''
};
const validationSchema = yup.object().shape({
    repositoryName: yup.string().required('Repository name is required'),
    ownerName: yup.string().required('Repository owners username is required'),
    rating: yup
      .number()
      .required('Rating is required')
      .min(0, 'Rate value must be 0-100')
      .max(100, 'Rate value must be 0-100'),
    text: yup.string(),
});



const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="ownerName" placeholder="Owners username" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="repositoryName"
          placeholder="Repository's name"
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="rating"
          placeholder="Rating 0-100"
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="text"
          placeholder="Optional review"
        />
      </View>
      <Button onPress={onSubmit}>Send Review</Button>
    </View>
  );
};

const Review = () => {
  const [create] = createReview();
  const history = useHistory();
  const [error, setError] = useState('');

  const onSubmit = async (values) => {
      console.log(values);
    const { repositoryName, ownerName, rating, text } = values;
    try {
        const response = await create({
          repositoryName,
          ownerName,
          rating,
          text
        });
        history.push(`repo/${response.repositoryId}`);
      } catch (error) {
        setError('Are you sure you havent already reviewed this repository?');
        setTimeout(() => setError(''), 5000 );
        console.log('error:', error);
        
      }
  };

  return (
    <View>
      {error && <Text style={styles.errorStyle}>Error: {error}</Text>}
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
    </View>
  );
};

export default Review;