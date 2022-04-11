import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';


export default function App() {
  return (
    <View style={styles.container}>
<EventList />
    </View>      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2062F0',
    alignItems: 'center'
   
  },
});
