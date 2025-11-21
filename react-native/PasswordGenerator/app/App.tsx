import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: "" }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              console.log(values);

              generatedPassword(+values.passwordLength);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,

              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length </Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange("passwordLength")}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <BouncyCheckBox
                    useBuiltInState={false}
                    isChecked={lowercase}
                    onPress={() => {
                      setLowercase(!lowercase);
                    }}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  {" "}
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <BouncyCheckBox
                    useBuiltInState={false}
                    isChecked={upperCase}
                    onPress={() => {
                      setUpperCase(!upperCase);
                    }}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include numbers</Text>
                  <BouncyCheckBox
                    useBuiltInState={false}
                    isChecked={numbers}
                    onPress={() => {
                      setNumbers(!numbers);
                    }}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include symbols</Text>
                  <BouncyCheckBox
                    useBuiltInState={false}
                    isChecked={symbols}
                    onPress={() => {
                      setSymbols(!symbols);
                    }}
                    fillColor="#29AB87"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}
                  >
                    {" "}
                    <Text style={styles.primaryBtnTxt}>
                      Generate Password
                    </Text>{" "}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.secondaryBtn}>
                    <Text
                      style={styles.secondaryBtnTxt}
                      onPress={() => {
                        handleReset();
                        resetPassword();
                      }}
                    >
                      Reset
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result : </Text>
            <Text style={styles.description}>LOng press to copy </Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 2,
  },
  description: {
    color: "#758283",
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputColumn: {
    flexDirection: "column",
  },
  inputStyle: {
    padding: 8,
    width: "30%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#16213e",
  },
  errorText: {
    fontSize: 12,
    color: "#ff0d10",
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#5DA3FA",
  },
  primaryBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#CAD5E2",
  },
  secondaryBtnTxt: {
    textAlign: "center",
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: "#ffffff",
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    color: "#000",
  },
});
