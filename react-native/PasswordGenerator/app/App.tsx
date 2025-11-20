import { View, Text } from "react-native";
import React from "react";
import * as yup from "yup";

const passwordSchema = yup.object().shape({
    passwordLength : yup.number()
    .min(4,"password should be atleast 8 digit")
    .required("this is a required feild")
})

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
