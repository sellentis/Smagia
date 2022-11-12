import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";

const UserInfo = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>User info</Text>
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

export default UserInfo;
