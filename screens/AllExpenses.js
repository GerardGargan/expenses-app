import { Text } from "react-native";
import ExpenesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../constants/store/expense-context";

export default function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    return (
        <ExpenesOutput fallbackText='No expenses found' expensesPeriod='Total' expenses={expensesCtx.expenses} />
    );
}