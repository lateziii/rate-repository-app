import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    picker: {
      height: 55,
      justifyContent: 'center'
    },
  });

const RepositorySorter = ({setOrder, order}) => {
    const pickerRef = useRef();

    function open() {
    pickerRef.current.focus();
    }

    function close() {
    pickerRef.current.blur();
    }

    return(

      <Picker style={styles.picker}
        selectedValue={order}
        onValueChange={(value) => setOrder(value)}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>

    );
};

export default RepositorySorter;
