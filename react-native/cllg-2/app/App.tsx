import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
import Child from "@/components/Child";

const App = () => {
  const [display, setDisplay] = useState("");

  const handlePress = (value: string) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("undefined");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{display || "0"}</Text>
        </View>
      </View>

      <View>
        <View style={styles.row}>
          <Child label="7" OnPress={() => handlePress("7")} />
          <Child label="8" OnPress={() => handlePress("8")} />
          <Child label="9" OnPress={() => handlePress("9")} />
          <Child label="/" OnPress={() => handlePress("/")} />
        </View>

        <View style={styles.row}>
          <Child label="4" OnPress={() => handlePress("4")} />
          <Child label="5" OnPress={() => handlePress("5")} />
          <Child label="6" OnPress={() => handlePress("6")} />
          <Child label="*" OnPress={() => handlePress("*")} />
        </View>

        <View style={styles.row}>
          <Child label="1" OnPress={() => handlePress("1")} />
          <Child label="2" OnPress={() => handlePress("2")} />
          <Child label="3" OnPress={() => handlePress("3")} />
          <Child label="-" OnPress={() => handlePress("-")} />
        </View>

        <View style={styles.row}>
          <Child label="C" OnPress={handleClear} />
          <Child label="0" OnPress={() => handlePress("0")} />
          <Child label="=" OnPress={handleResult} />
          <Child label="+" OnPress={() => handlePress("+")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: 'flex-end',
    padding: 30,
  },

  displayContainer: {
    marginBottom: 30,
    alignItems: "flex-end",
  },

  displayText: {
    fontSize: 48,
    color: "#ffffff",
    fontWeight: "300",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});

export default App;
