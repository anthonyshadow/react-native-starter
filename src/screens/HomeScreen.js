import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go To Components Demo"
        //Because of createStackNavigator we have access to these props and the routes defined in app.js
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go To Image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go To Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go To Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default HomeScreen;
