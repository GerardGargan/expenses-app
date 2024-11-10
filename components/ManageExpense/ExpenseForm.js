import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

export default function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: ''
  });


  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues(prevState => {
        return {...prevState, [inputIdentifier]: enteredValue}
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (value) => inputChangeHandler('amount', value),
            value: inputValues.amount
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (value) => inputChangeHandler('date', value),
            value: inputValues.date
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: (value) => inputChangeHandler('description', value),
          value: inputValues.description
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
