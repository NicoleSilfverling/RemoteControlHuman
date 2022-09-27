import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Counter({ count, setCount }) {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <TouchableOpacity onPress={() => setCount(count - 1)}>
        <Text style={{ color: "white" }}>-</Text>
        <View style={{ width: 20 }} />
      </TouchableOpacity>
      <Text style={{ color: "white" }}>{count}</Text>
      <View style={{ width: 20 }} />
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text style={{ color: "white" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}