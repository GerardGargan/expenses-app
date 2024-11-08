import { Text } from "react-native";
import ExpenesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpenses() {
    return (
        <ExpenesOutput expensesPeriod='Last 7 days' />
    );
}