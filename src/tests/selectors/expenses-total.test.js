import expenses from '../fixtures/expenses';
import getTotal from '../../selectors/expenses-total';

test('get total as 0 for no expense', () => {
    expect(getTotal([])).toBe(0);
});

test('get total from list of expenses', () => {
    expect(getTotal(expenses)).toBe(114195);
});

test('get total for a single response', () => {
    expect(getTotal([expenses[0]])).toBe(195);
});