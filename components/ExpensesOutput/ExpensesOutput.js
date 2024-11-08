import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

export default function ExpenesOutput() {
    return (
        <View>
            <ExpensesSummary />
            <ExpensesList />
        </View>
    );
}