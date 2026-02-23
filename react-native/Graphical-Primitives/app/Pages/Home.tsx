import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Line, Rect, Circle } from "react-native-svg";

const Home = () => {

  const styles = StyleSheet.create({
    bg: {
      backgroundColor: "#90EE90",
    },
  });

  return (
    <View style={styles.bg}>
      <Svg width={"500"} height={"700"}>
        <Rect
          x={130}
          y={50}
          width={"100"}
          height={"100"}
          stroke={"black"}
          strokeWidth={"2"}
          fill={"#2986CC"}
        />
        <Circle
          cx={"160"}
          cy={"75"}
          r={"10"}
          fill={"white"}
          stroke={"black"}
          strokeWidth={"1"}
        />
        <Circle
          cx={"200"}
          cy={"75"}
          r={"10"}
          fill={"white"}
          stroke={"black"}
          strokeWidth={"1"}
        />
        <Circle
          cx={"200"}
          cy={"75"}
          r={"5"}
          fill={"black"}
          stroke={"black"}
          strokeWidth={"1"}
        />
        <Circle
          cx={"160"}
          cy={"75"}
          r={"5"}
          fill={"black"}
          stroke={"black"}
          strokeWidth={"1"}
        />

        <Line
          x1={160}
          x2={200}
          y1={115}
          y2={115}
          strokeWidth={"3"}
          stroke={"black"}
        />

        <Rect
          x={79}
          y={160}
          width={"200"}
          height={"180"}
          stroke={"black"}
          strokeWidth={"2"}
          fill={"#2986CC"}
        />

        <Line
          x1={79}
          x2={30}
          y1={160}
          y2={350}
          strokeWidth={"4"}
          stroke={"black"}
        />
        <Line
          x1={279}
          x2={340}
          y1={160}
          y2={350}
          strokeWidth={"4"}
          stroke={"black"}
        />

        <Line
          x1={230}
          x2={230}
          y1={340}
          y2={550}
          strokeWidth={"4"}
          stroke={"black"}
        />

        <Line
          x1={130}
          x2={130}
          y1={340}
          y2={550}
          strokeWidth={"4"}
          stroke={"black"}
        />
      </Svg>
    </View>
  );
};

export default Home;
