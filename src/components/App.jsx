import User from './User/User';
import FriendList from './Friends/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Statistics from './Statistics/Statistics';

import data from 'path/data.json';
import user from 'path/user.json';
import friends from 'path/friends.json';
import transactions from 'path/transactions.json';

export const App = () => {
  return (
    <div>
      <User
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats} 
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList stats={friends} />
      <TransactionHistory stats={transactions} />
    </div>
  );
};
