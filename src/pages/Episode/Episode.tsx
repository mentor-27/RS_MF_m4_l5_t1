import { useLocation } from 'react-router-dom';

import { TEpisode } from '../../components/types';
import { BackButton } from '../../components';

import styles from './Episode.module.css';

export const Episode = () => {
  const {
    state: { episode },
  }: { state: { episode: TEpisode } } = useLocation();

  return (
    <>
      <h1 className={styles.caption}>{episode.name}</h1>
      <div className={styles.container}>
        <BackButton />
        <div className={styles.wrapper}>
          <div className={styles.episodeBlock}>
            <span>Episode</span>
            <span className={styles.episodeSign}>{episode.episode}</span>
          </div>

          <div className={styles.airDateBlock}>
            <span>Air date</span>
            <span className={styles.airDateSign}>{episode.air_date}</span>
          </div>
        </div>

        <div className={styles.dateSign}>
          {new Date(episode.created).toDateString()}
        </div>
      </div>
    </>
  );
};
