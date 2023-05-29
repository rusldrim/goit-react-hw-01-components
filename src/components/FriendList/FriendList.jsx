import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ stats }) {
  return (
    <ul className={css.friendList}>
      {stats.map(stat => {
        const { id, avatar, name, isOnline } = stat;
        const styleStatus = {
          backgroundColor: isOnline ? 'green' : 'red',
        };
        return (
          <li key={id} className={css.friendList__item}>
            <span className={css.friendList_status} style={styleStatus}></span>
            <img
              className={css.friendList_avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.friendList_name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};