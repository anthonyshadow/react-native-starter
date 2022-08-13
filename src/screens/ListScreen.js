import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 27 },
    { name: "Friend #2", age: 27 },
    { name: "Friend #3", age: 27 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 27 },
    { name: "Friend #6", age: 27 },
    { name: "Friend #7", age: 27 },
    { name: "Friend #8", age: 27 },
    { name: "Friend #9", age: 27 },
    { name: "Friend #10", age: 27 },
  ];

  //Flatlist is like mapping on ReactJs
  return (
    <FlatList
      //true if you want the list to be horizontal
      horizontal={false}
      // if you dont want to show the scroll bar make the following = false
      showsHorizontalScrollIndicator
      showsVerticalScrollIndicator
      //adds key propery to the list object
      keyExtractor={(friend) => friend.name}
      //data we want to map through
      data={friends}
      //what we want to render from our data
      renderItem={({ item }) => {
        return (
          <Text style={styles.testStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  testStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
