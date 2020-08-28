import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('generated set start date action object', () => {
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        timestamp: moment(0)
    });
});

test('generated set end date action object', () => {
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        timestamp: moment(0)
    });
});

test('generated set text filter action object with provided text', () => {
    expect(setTextFilter('test')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    });
});

test('generated set text filter action object with no text',  () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('generated sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('generated sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});