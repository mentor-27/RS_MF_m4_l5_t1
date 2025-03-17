import { useLocation } from 'react-router-dom';

import { IEpisode } from '../../types';
import { BackButton } from '../../components';

import styles from './Episode.module.css';

const Episode = () => {
  const {
    state: { episode },
  }: { state: { episode: IEpisode } } = useLocation();

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

export default Episode;
