import css from './Description.module.css';
import PropTypes from 'prop-types';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className={css.description}>
      <img className={css.avatar} src={avatar} alt={username} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
