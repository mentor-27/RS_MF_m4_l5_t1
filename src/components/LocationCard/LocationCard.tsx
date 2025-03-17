import { Link } from 'react-router-dom';

import { TLocationCardProps } from '../../types';
import { intrenalRoutes } from '../../routes';

import styles from './LocationCard.module.css';

export const LocationCard: React.FC<TLocationCardProps> = ({
  location,
  ref,
}) => {
  return (
    <Link
      to={intrenalRoutes.location(location.id.toString())}
      className={styles.link}
      state={{ location }}
    >
      <div ref={ref} className={styles.locationContainer}>
        <span className={styles.nameSign}>{location.name}</span>
      </div>
    </Link>
  );
};
