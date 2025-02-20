import { EpisodeCard, SortButton } from '../../components';
import { episodes } from '../../db/episode.ts';
import { useSort } from '../../hooks/useSort.tsx';

import styles from './Episodes.module.css';

export const Episodes = () => {
  const { dataArr, toggleSort } = useSort(episodes);

  return (
    <>
      <h1 className={styles.caption}>Episodes</h1>
      <div className={styles.container}>
        <SortButton onClick={toggleSort} />
        <div className={styles.episodes}>
          {dataArr.map(dataItem => (
            <EpisodeCard key={dataItem.id} episode={dataItem} />
          ))}
        </div>
      </div>
    </>
  );
};
