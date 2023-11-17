import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const decreaseAllocation = (name) => {
        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: {
                name: name,
                cost: 10,
            },
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        </tr>
    );
};

export default ExpenseItem;

