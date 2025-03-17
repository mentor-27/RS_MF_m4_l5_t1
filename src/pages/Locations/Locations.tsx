import { useCallback, useRef, useState } from 'react';

import { LocationCard, SortButton } from '../../components';
import { useSort, useQuery } from '../../hooks';
import { ILocation } from '../../types.ts';

import styles from './Locations.module.css';

const Locations = () => {
  const [pageNum, setPageNum] = useState(1);
  const { loading, error, data, hasMore } = useQuery('/location', pageNum);
  const { dataArr, toggleSort } = useSort(data as ILocation[]);

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
      <h1 className={styles.caption}>Locations</h1>
      <div className={styles.container}>
        <SortButton onClick={toggleSort} />
        <div className={styles.locations}>
          {dataArr.map((dataItem, index) => {
            if (index === dataArr.length - 2) {
              return (
                <LocationCard
                  ref={lastNodeRef}
                  key={dataItem.id}
                  location={dataItem}
                />
              );
            } else {
              return <LocationCard key={dataItem.id} location={dataItem} />;
            }
          })}
          {loading && <div>Loading...</div>}
          {error && <div>Something went wrong</div>}
        </div>
      </div>
    </>
  );
};

export default Locations;
