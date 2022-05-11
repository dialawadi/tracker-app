import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Income = () => {
    const { transactions } = useContext(GlobalContext);
    const positive = transactions.filter(transaction => transaction.amount >= 0).map(transaction => transaction.amount);
    const negative = transactions.filter(transaction => transaction.amount < 0).map(transaction => transaction.amount);
    const incomes = positive.reduce((acc, item) => acc += item, 0).toFixed(2);
    const expence = negative.reduce((acc, item) => acc += item, 0).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${incomes}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expence}</p>
            </div>
        </div>
    )
}

export default Income