import PropTypes from 'prop-types';
import { TransactionTable, TransactionTd, TransactionTh, TransactionThead, TransactionTr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionThead>
        <TransactionTr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </TransactionTr>
      </TransactionThead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionTr key={id}>
              <TransactionTd>{type}</TransactionTd>
              <TransactionTd>{amount}</TransactionTd>
              <TransactionTd>{currency}</TransactionTd>
            </TransactionTr>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,
        })
    ).isRequired
}