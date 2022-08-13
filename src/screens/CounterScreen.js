import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  // state === {count: number}
  // action === {type: increase || decrease, payload: 1}

  switch (action.type) {
    case "change_increase":
      return { ...state, count: state.count + action.payload };
    case "change_decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="increase"
        onPress={() => dispatch({ type: "change_increase", payload: 1 })}
      />
      <Button
        title="decrease"
        onPress={() => dispatch({ type: "change_decrease", payload: 1 })}
      />
      <Text style={styles.text}>Current Count: {state.count}</Text>
    </View>
  );
};

styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default CounterScreen;
