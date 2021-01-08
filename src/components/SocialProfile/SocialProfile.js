import PropTypes from 'prop-types';
import styles from './SocialProfile.module.css';
import StatsList from './StatsList';

function Profile({ userName, userTag, userLocation, userAvatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={userAvatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{userName}</p>
        <p className={styles.tag}>{`@${userTag}`}</p>
        <p className={styles.location}>{userLocation}</p>
      </div>
      <StatsList list={stats} />
    </div>
  );
}

Profile.defaultProps = {
  userAvatar: 'https://www.flaticon.com/svg/static/icons/svg/3237/3237472.svg',
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string,
  userAvatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
