import { Description } from './Description';
import { Stats } from './Stats';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <Description
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      ></Description>
      <Stats stats={stats}></Stats>
    </div>
  );
};
