import { useCallback, useRef, useState } from 'react';

import { EpisodeCard, SortButton } from '@components';
import { useSort, useQuery } from '@hooks';
import { IEpisode } from '@types';

import styles from './Episodes.module.css';

const Episodes = () => {
  const [pageNum, setPageNum] = useState(1);
  const { loading, error, data, hasMore } = useQuery('/episode', pageNum);
  const { dataArr, toggleSort } = useSort(data as IEpisode[]);

  const observer = useRef<IntersectionObserver>(null);

  const lastNodeRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <h1 className={styles.caption}>Episodes</h1>
      <div className={styles.container}>
        <SortButton onClick={toggleSort} />
        <div className={styles.episodes}>
          {dataArr.map((dataItem, index) => {
            if (index === dataArr.length - 2) {
              return (
                <EpisodeCard
                  ref={lastNodeRef}
                  key={dataItem.id}
                  episode={dataItem}
                />
              );
            } else {
              return <EpisodeCard key={dataItem.id} episode={dataItem} />;
            }
          })}
          {loading && <div>Loading...</div>}
          {error && <div>Something went wrong</div>}
        </div>
      </div>
    </>
  );
};

export default Episodes;
