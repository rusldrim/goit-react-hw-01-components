import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          imgUrl={avatar}
          name={name}
          online={isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
};
