import css from './StatList.module.css';
import PropTypes from 'prop-types';

export const StatList = ({ label, percentage }) => {
  return (
    <li className={css.statItem}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

StatList.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
);
