import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ stats }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionHistory__header}>
          <th className={css.transactionHistory__itemHead}>Type</th>
          <th className={css.transactionHistory__itemHead}>Amount</th>
          <th className={css.transactionHistory__itemHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {stats.map(stat => {
          const { id, type, amount, currency } = stat;
          return (
            <tr key={id} className={css.transactionHistory__line}>
              <td className={css.transactionHistory__item}>{type}</td>
              <td className={css.transactionHistory__item}>{amount}</td>
              <td className={css.transactionHistory__item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};