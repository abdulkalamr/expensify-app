import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('rendered expense list filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('rendered expense list filters with alt data', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('handled text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('handled sort by date', () => {
    wrapper.setProps({ filter: altFilters });
    wrapper.find('select').simulate('change', { target: { value: 'date' } });
    expect(sortByDate).toHaveBeenCalled();
});

test('handled sort by amount', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount' } });
    expect(sortByAmount).toHaveBeenCalled();
});

test('handled date changes', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('handled focus change', () => {
    const focused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toBe(focused);
});