import { StyleSheet } from 'react-native';

const Exstyles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  wrapper: {
    backgroundColor: 'white', // ✅ this isolates the shadow to the container
    borderRadius: 8,
    // marginHorizontal: 10,
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 0,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android shadow
    elevation: 5,
  },
});

export default Exstyles;
