import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CommonButton from './common/Buttons/CommonButton';

const InputHandle = ({name, setName}) => {
  return (
    <View>
      <Text>Your name is: {name}</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter your name..."
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <CommonButton title={'Clear Input'} handleChange={() => setName('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    fontSize: 18,
    color: 'red',
    borderWidth: 2,
    borderColor: 'black',
    margin: 3,
    padding: 5,
  },
});

export default InputHandle;
