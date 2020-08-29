import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        {props.expenseCount !== 0 && `Viewing ${props.expenseCount} expense${props.expenseCount === 1 ? '' : 's'} totalling ${numeral(props.expensesTotal / 100).format('$0,0.00')}`}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenseCount: state.expenses.length,
        expensesTotal: selectExpensesTotal(state.expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);