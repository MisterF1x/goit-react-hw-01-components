import user from 'data/user.json';
import stats from 'data/data.json';
import friends from 'data/friends.json';
import items from 'data/transactions.json';
import { Profile } from './Profile/Profile';
import { Global} from '@emotion/react';
import { Style } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <StatisticsList stats={stats} title='Upload stats' />
      <FriendsList friends={friends} />
      <TransactionHistory items={items} />
      <Global styles={Style} />
    </Layout>
  );
};

