import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense}
        history={history} 
        expense={expenses[2]}
    />);
});

test('rendered edit expense page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('handled edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('handled remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});