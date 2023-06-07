import css from './Stats.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ stats }) => {
  return (
    <ul className={css.stats}>
      <li className={css.statsItem}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = PropTypes.shape({
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
});
