import { StatusBar } from 'expo-status-bar';
import { LayoutAnimation, StyleSheet, Text, View, Button } from 'react-native';


import Tasks from './components/Tasks';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>

        <Text style={styles.topbarTitle}>Home</Text>

      </View>

      <View style={styles.items}>
        <Tasks />
        <Tasks />
        <Tasks />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  taskWrapper: {
    paddingTop: 28,
    paddingHorizontal: 24,
    alignItems: 'flex-end',

  },

  topbarTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 133,

  },
  items: {},

});



