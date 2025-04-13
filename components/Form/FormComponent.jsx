import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Keyboard  } from 'react-native';
import CommonButton from '../common/Buttons/CommonButton';
import Exstyles from '../../commonStyle';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [errors, setErrors] = useState({});

  const resetFormData = () => {
    setName('');
    setEmail('');
    setPassword('');
    setErrors({});
    setDisplay(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Minimum 6 characters required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {

    if (validate()) {
      setDisplay(true);
      Keyboard.dismiss();
    } else {
      setDisplay(false);
    }
  };

  return (
    <View style={Exstyles.wrapper}>
      <Text style={Exstyles.heading}>Form Component</Text>

      <TextInput
        placeholder="Enter user name..."
        style={[styles.textInput, errors.name && styles.errorInput]}
        onChangeText={(text) => {
          setName(text);
          if (errors.name) setErrors({ ...errors, name: '' });
        }}
        value={name}
      />
      {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

      <TextInput
        placeholder="Enter user email..."
        style={[styles.textInput, errors.email && styles.errorInput]}
        onChangeText={(text) => {
          setEmail(text);
          if (errors.email) setErrors({ ...errors, email: '' });
        }}
        value={email}
        keyboardType="email-address"
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      <TextInput
        placeholder="Enter user password..."
        style={[styles.textInput, errors.password && styles.errorInput]}
        onChangeText={(text) => {
          setPassword(text);
          if (errors.password) setErrors({ ...errors, password: '' });
        }}
        value={password}
        secureTextEntry={true}
      />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      <View style={styles.buttonWrapper}>
        <CommonButton
          title="Print Details"
          handleChange={handleSubmit}
          theme="primary"
          type="submit"
        />
        <CommonButton title="Clear Details" handleChange={resetFormData} />
      </View>

      <View style={{ marginTop: 10 }}>
        {display && (
          <View>
            <Text style={styles.outputText}>User Name is: {name}</Text>
            <Text style={styles.outputText}>Email is: {email}</Text>
            <Text style={styles.outputText}>Password is: {password}</Text>
          </View>
        )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'grey',
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    // Android shadow
    elevation: 5,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outputText: {
    fontSize: 20,
    fontWeight: 600,
  },
  errorText: {
  color: 'red',
  fontSize: 14,
  marginLeft: 12,
  marginTop: -8,
  marginBottom: 5,
},

});

export default FormComponent;
