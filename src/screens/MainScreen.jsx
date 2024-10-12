import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const MainScreen = () => {
  const navigation = useNavigation();

  // const handlePress = () => {
  //   navigation.navigate('XX'); 
  // };

  return (
    <View style={styles.container}>
      {/* <Text onPress={handlePress} style={styles.text}>MainScreen</Text> */}
      <Text style={styles.Heading}>SignUP Page</Text>
      <View>

      </View>

    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
  Heading:{
    textAlign:'center',
    color:'black'
  }
});
