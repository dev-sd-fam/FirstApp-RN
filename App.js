import { Button, StyleSheet, Text, View } from 'react-native';
import CommonButton from './Buttons/CommonButton';

export default function App() {
  return (
    <View>
      <Text style={{fontSize: 25,padding:5, color:"red", marginTop: 55}}>Hello subodh here we go our first app is build</Text>
      <Text style={{fontSize: 15,padding:5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
      <CommonButton title={"Add to Cart"}/>
      <CommonButton title={"Buy now"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
