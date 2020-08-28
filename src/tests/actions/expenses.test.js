import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('generated remove expense action object', () => {
    expect(removeExpense({ id: '1' })).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1'
    });
});

test('generated edit expense action object', () => {
    expect(editExpense('1', { note: 'This is a note for testing.' })).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            note: 'This is a note for testing.'
        }
    });
});

test('generated add expense action object with provided values', () => {
    const expense = {
        description: 'Rent',
        amount: 5000,
        createdAt: 1000,
        note: 'This is my last month\'s rent'
    };
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test('generated add expense action object with default values', () => {
    expect(addExpense()).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    });
});