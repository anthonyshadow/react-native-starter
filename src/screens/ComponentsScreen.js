import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Anthony";
  const Greeting = <Text style={styles.textStyle2}>My Name is {name}</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with Reatc Native</Text>
      {Greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
