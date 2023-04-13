import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import { FriendItem, FriendsListItems } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListItems>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            <FriendsListItem friends={friend} />
          </FriendItem>
        );
      })}
    </FriendsListItems>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
