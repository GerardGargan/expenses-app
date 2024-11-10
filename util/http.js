import axios from "axios";

const url = 'https://expenses-app-8cdb7-default-rtdb.europe-west1.firebasedatabase.app/expenses.json';

export function storeExpense(expenseData) {
    axios.post(url, expenseData);
}

