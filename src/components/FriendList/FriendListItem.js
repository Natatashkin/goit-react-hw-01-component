import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
// import Avatar from './Avatar';

function FriendListItem({ name, avatar, state }) {
  // const { name, avatar, isOnline } = friend;
  return (
    <li className={s.item}>
      <span className={state ? s.isOnline : s.isOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3237/3237472.svg',
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
};

export default FriendListItem;

{
  /* <li className={s.item}>
  <span className={isOnline ? s.isOnline : s.isOffline}></span>
  <Avatar src={avatar} alt={name} />
  <p className={s.name}>{name}</p>
</li>; */
}

//  <Avatar src={avatar} alt={name} />;
