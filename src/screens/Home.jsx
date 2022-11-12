import React from "react";
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('UserInfo')}
        />
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

export default Home;
