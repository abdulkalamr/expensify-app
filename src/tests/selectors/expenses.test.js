import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('filtered by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    expect(selectExpenses(expenses, filters)).toEqual([ expenses[2], expenses[1] ]);
});

test('filtered by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    expect(selectExpenses(expenses, filters)).toEqual([ expenses[2], expenses[0] ]);
});

test('filtered by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    expect(selectExpenses(expenses, filters)).toEqual([ expenses[0], expenses[1] ]);
});

test('sorted by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    expect(selectExpenses(expenses, filters)).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('sorted by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    expect(selectExpenses(expenses, filters)).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});