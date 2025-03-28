import { useCallback, useRef, useState } from 'react';

import { CharacterCard, SortButton } from '@components';
import { useQuery, useSort } from '@hooks';
import { ICharacter } from '@types';

import styles from './Characters.module.css';

const Characters = () => {
  const [pageNum, setPageNum] = useState(1);
  const { loading, error, data, hasMore } = useQuery('/character', pageNum);
  const { dataArr, toggleSort } = useSort(data as ICharacter[]);

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
      <h1 className={styles.caption}>Universe characters</h1>
      <div className={styles.container}>
        <SortButton onClick={toggleSort} />
        <div className={styles.characters}>
          {dataArr.map((dataItem, index) => {
            if (index === dataArr.length - 2) {
              return (
                <CharacterCard
                  ref={lastNodeRef}
                  key={dataItem.name}
                  character={dataItem}
                />
              );
            } else {
              return <CharacterCard key={dataItem.id} character={dataItem} />;
            }
          })}
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>Something went wrong</div>}
      </div>
    </>
  );
};

export default Characters;
