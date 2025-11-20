import { View, Text } from "react-native";
import { useState } from "react";
import React from "react";
import * as yup from "yup";

const passwordSchema = yup.object().shape({
  passwordLength: yup
    .number()
    .min(4, "password should be atleast 8 digit")
    .required("this is a required feild"),
});

export default function App() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [setsymbols, setSetsymbols] = useState(true);

  const generatedPassword = (passwordLength: number) => {};

  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {};
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
