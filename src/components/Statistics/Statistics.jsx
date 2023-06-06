import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.statistics__title}>{title}</h2>}
      <ul className={css.statistics__statList}>
        {stats.map(stat => {
          const { label, percentage } = stat;
          return (
            <li
              key={stat.id}
              className={css.statistics__item}
              style={{
                backgroundColor: `#${Math.floor(Math.random() * 16777215)
                  .toString(16)
                  .padStart(6, 0)}`,
              }}
            >
              <span className={css.statistics__label}>{label}</span>
              <span className={css.statistics__percentage}>{percentage}%</span>
            </li>
          );
        })}
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
    }).isRequired,
  ).isRequired,
};