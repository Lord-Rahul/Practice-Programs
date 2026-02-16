import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Child = (props:any) => {
  const isOperator = ["+", "-", "*", "/", "="].includes(props.label);
  const isClear = props.label === "C";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOperator && styles.operator,
        isClear && styles.clear,
      ]}
      onPress={props.OnPress}
    >
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Child;

const styles = StyleSheet.create({
  button: {
    width: 75,
    height: 75,
    borderRadius: 20,
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
  },

  operator: {
    backgroundColor: "#f97316",
  },

  clear: {
    backgroundColor: "#ef4444",
  },

  text: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "600",
  },
});
