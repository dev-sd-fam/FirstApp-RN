import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CommonButton from './components/common/Buttons/CommonButton';
import { useState } from 'react';
import FormComponent from './components/Form/FormComponent';
import InputHandle from './components/InputHandle';
import FlatListMap from './components/FlatListMap';

export default function App() {
  const [number, setNumber] = useState(100);
  const [name, setName] = useState('');
  // let number = 100;
  const handleAddNumber = () => {
    setNumber((prev) => {
      const newNum = prev + 1;
      return newNum;
    });
  };
  const handleMinusNumber = () => {
    setNumber((prev) => {
      const newNum = prev - 1;
      return newNum;
    });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <Text style={styles.common}>React Native app</Text>
          <Text style={styles.buildText}>Build no :{number}</Text>

          <View style={styles.buttonWrapper}>
            <CommonButton
              title="Add Number"
              handleChange={handleAddNumber}
              theme="primary"
            />
            <CommonButton
              title="Minus Number"
              handleChange={handleMinusNumber}
            />
          </View>

          <FormComponent />

          {/* ✅ Wrap FlatListMap in a height-limited container */}
          <View style={{ height: 360, overflow: 'scroll' }}>
            <FlatListMap />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
{
  /* <InputHandle name={name} setName={setName} /> */
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  common: {
    fontSize: 30,
    padding: 5,
    color: 'black',
    fontWeight: 700,
    marginBottom: 10,
    textAlign: 'center',
  },
  contentContainer: {
    paddingBottom: 7, // Space at the bottom for smooth scrolling
  },
  buildText: {
    fontSize: 16,
    padding: 5,
    color: 'blue',
    fontWeight: 600,
    textAlign: 'right',
    marginRight: 10,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
