import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function Avatar({ src, alt }) {
  return <img className={s.avatar} src={src} alt={alt} width="48" />;
}

Avatar.defaultProps = {
  src: 'https://www.flaticon.com/svg/static/icons/svg/3237/3237472.svg',
};

export default Avatar;
