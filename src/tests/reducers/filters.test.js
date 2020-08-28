import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('set default filter values', () => {
    expect(filtersReducer(undefined, { 'type': '@@INIT' })).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('set filter text', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    };
    expect(filtersReducer(undefined, action).text).toBe('test');
});

test('set start date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        timestamp: startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('set end date', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        timestamp: endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});