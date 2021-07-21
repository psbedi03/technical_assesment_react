/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { loadSpecies } from '../utils/queries';

const FisheriesView = ({ navigation }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Detail', { SpeciesName: item.name, data: item })}
      >
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity >
    );
  };

  React.useEffect(() => {
    loadSpecies()
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setData([]);
        setLoading(false);
      });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() =>
          loading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : <Text>No Data</Text>
        }
      />

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  item: {
    backgroundColor: '#6CB9E0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FisheriesView;
