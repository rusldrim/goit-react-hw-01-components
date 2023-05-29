import PropTypes from 'prop-types';

import css from './User.module.css';
export default function User({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.profile}>
      <div className={css.profile__description}>
        <img src={avatar} alt={username} className={css.profile__avatar} />
        <p className={css.profile__name}>{username}</p>
        <p className={css.profile__tag}>@{tag}</p>
        <p className={css.profile__location}>{location}</p>
      </div>

      <ul className={css.profile__stats}>
        <li className={css.profile__statsItem}>
          <span className={css.profile__label}>Followers</span>
          <span className={css.profile__quantity}>{followers}</span>
        </li>
        <li className={css.profile__statsItem}>
          <span className={css.profile__label}>Views</span>
          <span className={css.profile__quantity}>{views}</span>
        </li>
        <li className={css.profile__statsItem}>
          <span className={css.profile__label}>Likes</span>
          <span className={css.profile__quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
User.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
