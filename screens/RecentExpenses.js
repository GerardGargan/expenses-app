import { Text } from "react-native";
import ExpenesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../constants/store/expense-context";
import { getDateMinusDays } from "../util/date";

export default function RecentExpenses() {

    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo;
    });

    return (
        <ExpenesOutput expensesPeriod='Last 7 days' expenses={recentExpenses} />
    );
}