import { Link } from 'react-router-dom';

import { TEpisodeCardProps } from '../types';
import { intrenalRoutes } from '../../routes.ts';

import styles from './EpisodeCard.module.css';

export const EpisodeCard: React.FC<TEpisodeCardProps> = ({ episode }) => {
  return (
    <Link
      to={intrenalRoutes.episode(episode.id.toString())}
      className={styles.link}
      state={{ episode }}
    >
      <div className={styles.episodeContainer}>{episode.name}</div>
    </Link>
  );
};
