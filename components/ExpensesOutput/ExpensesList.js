import { FlatList, StyleSheet, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    const item = itemData.item;
    return <ExpenseItem {...item} />
}

export default function ExpensesList({ expenses }) {
    return (
        <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
    );
}

const styles = StyleSheet.create({

});