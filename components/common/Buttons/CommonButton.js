import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CommonButton = ({ title, handleChange, theme, type }) => {
  const handlePress = () => {
    if (type === 'submit') {
      handleChange?.(); // optional chaining in case not passed
    } else {
      handleChange?.();
    }
  };
  return (
    <TouchableOpacity style={styles.commonButtonStyle} onPress={handlePress}>
      <Text
        style={
          theme == 'primary'
            ? [styles.buttonText, styles.primaryButton]
            : styles.buttonText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  commonButtonStyle: {
    // backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    borderColor: 'red',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  primaryButton: {
    // backgroundColor: 'green',
    borderColor: 'green',
    color: 'green',
  },
});

export default CommonButton;
