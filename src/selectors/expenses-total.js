const getTotal = (expenses) => {
    const total = expenses.reduce((total, expense) => total + expense.amount, 0);
    return total;
};

export default getTotal;