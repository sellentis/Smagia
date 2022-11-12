import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>Smagia</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 36,
  },
});

export default App;
