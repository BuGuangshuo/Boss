import { View, Text } from "@tarojs/components";
import { useState } from "react";
import { Taro, useLoad } from "@tarojs/taro";
import "./index.less";

const Index = () => {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Text>Hello world</Text>
    </View>
  );
};

export default Index;
