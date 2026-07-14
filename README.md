# js-expense-summary

A simple JavaScript utility to calculate expense totals, category-specific breakdowns, and locate the largest expense from a list of transactions.

---

## Features

The utility defines the following functions in [main.js](./main.js):

- **`calculateTotal(expenses)`**: Calculates the sum of all expense amounts.
- **`calculateCategoryTotal(expenses, category)`**: Calculates the sum of expense amounts for a specific category.
- **`findLargestExpense(expenses)`**: Returns the expense object with the largest amount.
- **`createExpenseSummary(expenses)`**: Generates a consolidated summary object containing the total, food total, transport total, and the largest expense details.

## Expense Data Schema

The list of expenses processed by the script consists of objects with the following properties:

```javascript
{
  id: number,
  category: string,
  amount: number
}
```

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Open a terminal in the project directory.
3. Run the script using:

   ```bash
   node main.js
   ```

Project page url: https://roadmap.sh/projects/js-expense-summary