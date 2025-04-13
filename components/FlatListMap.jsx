import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Exstyles from '../commonStyle';

const FlatListMap = () => {
  const users = [
    { id: 1, name: 'Anil' },
    { id: 2, name: 'Sunil' },
    { id: 3, name: 'Ramesh' },
    { id: 4, name: 'Suresh' },
    { id: 5, name: 'Ramesh' },
    { id: 6, name: 'Suresh' },
    { id: 7, name: 'Amit' },
    { id: 8, name: 'Raj' },
    { id: 9, name: 'Simran' },
    { id: 10, name: 'Priya' },
  ];

  return (
    <View style={Exstyles.wrapper}>
      <Text style={[Exstyles.heading, { marginTop: 10 }]}>
        List with Flat List Component
      </Text>

      <View style={{ height: 250, paddingHorizontal: 10 }}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              User name is: <Text style={{ color: 'black' }}>{item.name}</Text>
            </Text>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 15,
    padding: 10,
    backgroundColor: '#f1f1f1',
    marginBottom: 5,
    color: 'grey',
    fontWeight: '600',
  },
});

export default FlatListMap;
