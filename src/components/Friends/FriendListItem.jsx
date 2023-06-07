import css from './FriendListItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const FriendListItem = ({ imgUrl, name, online }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx(css.status, {
          [css.isOnline]: online,
        })}
      ></span>
      <img className={css.avatar} src={imgUrl} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  }).isRequired,
);
