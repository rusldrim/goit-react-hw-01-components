import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './Transactions/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transactions/TransactionsHistory';

export const App = () => {
  return (
    <div
      style={{
        
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={"Upload stats"} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
