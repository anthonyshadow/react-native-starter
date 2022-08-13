import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forst"
        imageSource={require("../../assets/forest.jpg")}
        score="Image Score - 9"
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score="Image Score - 7"
      />
      <ImageDetail
        title="Mountaint"
        imageSource={require("../../assets/mountain.jpg")}
        score="Image Score - 4"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
