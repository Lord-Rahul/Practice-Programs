import { View, Text, Alert, TextInput, Button } from "react-native";
import { useState } from "react";
import React from "react";

const Home = () => {
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");

  const submitHandler = () => {
    if (!roll || !name || !course || !year) {
      Alert.alert("Error : all fields are required ");
      return;
    }
    if (isNaN(Number(year))) {
      Alert.alert(`error: year must be number`);
      return;
    }

    Alert.alert(
      `Student Detail\n`,
      `Roll No. : ${roll}\n name : ${name}\n Course Name : ${course} \n year : ${year}`,
    );
  };

  return (
    <View>
      <Text>Student Form</Text>
      <TextInput
        placeholder="Enter your Roll No. "
        value={roll}
        onChangeText={setRoll}
      />
      <TextInput
        placeholder="Enter your Name "
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter your Course Name "
        value={course}
        onChangeText={setCourse}
      />
      <TextInput placeholder="Enter year" value={year} onChangeText={setYear} />
      <Button title="Submit" onPress={submitHandler} />
    </View>
  );
};

export default Home;
