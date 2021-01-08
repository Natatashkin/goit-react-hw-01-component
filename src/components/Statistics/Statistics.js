import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title.toUpperCase()}</h2>}
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: getRndColor(), color: 'white' }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRndColor() {
  return `rgb(${getRndInteger(0, 255)}, ${getRndInteger(
    0,
    255,
  )}, ${getRndInteger(0, 255)}`;
}
