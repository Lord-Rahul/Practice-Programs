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
  const [symbols, setSymbols] = useState(true);

  const generatedPassword = (passwordLength: number = 8) => {
    let characterList = "assdfghjklqwertyuiopzxcvbnm";
    const upperChar = "ASDFGHJKLQWERTYUIOPZXCVBNM";
    const numbersChar = "1234567890";
    const specialChar = "~`!@#$%^&*()_+={}[]:;|/?.,";

    if (upperCase) {
      characterList += upperChar;
    }
    if (numbers) {
      characterList += numbersChar;
    }
    if (symbols) {
      characterList += specialChar;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setIsPassGenerated(false);
    setPassword("");
    setLowercase(true);
    setNumbers(true);
    setUpperCase(true);
    setSymbols(true);
  };
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
