import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';
// import { children } from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
FriendList.defaultProps = {};

FriendList.propTypes = {};

export default FriendList;
