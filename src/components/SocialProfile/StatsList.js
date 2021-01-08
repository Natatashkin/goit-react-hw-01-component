import s from './StatsList.module.css';
import PropTypes from 'prop-types';

const StatsList = ({ list }) => {
  const arrayOfStats = [];
  for (const item in list) {
    if (Object.hasOwnProperty.call(list, item)) {
      if (list[item] >= 1000) {
        let symbolPlace = list[item] / 1000;
        list[item] = symbolPlace.toString().replace(/\./, ',');
      }
      arrayOfStats.push({ label: item, value: list[item] });
    }
  }
  return (
    <ul className={s.stats}>
      {arrayOfStats.map((item, index) => (
        <li key={item.label + (index + 1) * item.value}>
          <span className={s.label}>{item.label}</span>
          <span className={s.quantity}>{item.value}</span>
        </li>
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  list: PropTypes.object,
  arrayOfStats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
};

export default StatsList;
