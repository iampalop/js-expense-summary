function calculateTotal(expenses) {
    let sum = 0;
    for (const expense of expenses) {
        sum = sum + expense.amount;
    }
    return sum;
}

function calculateCategoryTotal(expenses, category) {
    const filteredExpenses = expenses.filter(expense => expense.category === category);
    return calculateTotal(filteredExpenses);
}

function findLargestExpense(expenses) {
    const amounts = expenses.map(expense => expense.amount);
    const maxAmount = Math.max(...amounts);
    const maxIndex = amounts.indexOf(maxAmount);
    return expenses[maxIndex];
}

function createExpenseSummary(expenses) {
    return {
        total: calculateTotal(expenses),
        foodTotal: calculateCategoryTotal(expenses, 'food'),
        transportTotal: calculateCategoryTotal(expenses, 'transport'),
        largestExpense: findLargestExpense(expenses),
    };
}

const expenses = [
    { id: 1, category: 'food', amount: 24 },
    { id: 2, category: 'transport', amount: 15 },
    { id: 3, category: 'food', amount: 18 },
    { id: 4, category: 'books', amount: 40 },
];
console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));