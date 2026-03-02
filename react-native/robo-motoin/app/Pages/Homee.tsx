import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import Svg, { Line, Rect, Circle, G } from "react-native-svg";

const AnimatedG = Animated.createAnimatedComponent(G);

const Homee = () => {
  const leftLeg = useRef(new Animated.Value(0)).current;
  const rightLeg = useRef(new Animated.Value(0)).current;
  const leftArm = useRef(new Animated.Value(0)).current;
  const rightArm = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(leftLeg, {
            toValue: 1,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(rightLeg, {
            toValue: -1,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(leftArm, {
            toValue: -1, // opposite of left leg
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(rightArm, {
            toValue: 1, // opposite of right leg
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(leftLeg, {
            toValue: -1,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(rightLeg, {
            toValue: 1,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(leftArm, {
            toValue: 1,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(rightArm, {
            toValue: -1,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, []);

  const rotateInterpolate = (val) =>
    val.interpolate({
      inputRange: [-1, 1],
      outputRange: ["-25deg", "25deg"],
    });

  return (
    <View style={styles.container}>
      <Svg width="500" height="700">
        
        <Rect x={130} y={50} width="100" height="100" stroke="black" strokeWidth="2" fill="#2986CC" />
        <Circle cx="160" cy="75" r="10" fill="white" stroke="black" strokeWidth="1" />
        <Circle cx="200" cy="75" r="10" fill="white" stroke="black" strokeWidth="1" />
        <Circle cx="160" cy="75" r="5" fill="black" />
        <Circle cx="200" cy="75" r="5" fill="black" />

        <Rect x={79} y={160} width="200" height="180" stroke="black" strokeWidth="2" fill="#2986CC" />

       
        <AnimatedG
          origin="79,180"
          style={{ transform: [{ rotate: rotateInterpolate(leftArm) }] }}
        >
          <Line x1={79} y1={180} x2={30} y2={350} strokeWidth="4" stroke="black" />
        </AnimatedG>

       
        <AnimatedG
          origin="279,180"
          style={{ transform: [{ rotate: rotateInterpolate(rightArm) }] }}
        >
          <Line x1={279} y1={180} x2={340} y2={350} strokeWidth="4" stroke="black" />
        </AnimatedG>

        {/* LEFT LEG */}
        <AnimatedG
          origin="130,340"
          style={{ transform: [{ rotate: rotateInterpolate(leftLeg) }] }}
        >
          <Line x1={130} y1={340} x2={130} y2={550} strokeWidth="4" stroke="black" />
        </AnimatedG>

        {/* RIGHT LEG */}
        <AnimatedG
          origin="230,340"
          style={{ transform: [{ rotate: rotateInterpolate(rightLeg) }] }}
        >
          <Line x1={230} y1={340} x2={230} y2={550} strokeWidth="4" stroke="black" />
        </AnimatedG>
      </Svg>
    </View>
  );
};

export default Homee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90EE90",
  },
});