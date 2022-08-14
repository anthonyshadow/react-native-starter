import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textStyle1}></View>
      <View style={styles.textStyle2}></View>
      <View style={styles.textStyle3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle1: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  textStyle2: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    alignSelf: "flex-end",
  },
  textStyle3: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
