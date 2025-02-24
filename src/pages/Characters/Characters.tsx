import { CharacterCard, SortButton } from '../../components';
import { characters } from '../../db/characters';
import { useSort } from '../../hooks';

import styles from './Characters.module.css';

export const Characters = () => {
  const { dataArr, toggleSort } = useSort(characters);

  return (
    <>
      <h1 className={styles.caption}>Universe characters</h1>
      <div className={styles.container}>
        <SortButton onClick={toggleSort} />
        <div className={styles.characters}>
          {dataArr.map(dataItem => (
            <CharacterCard key={dataItem.id} character={dataItem} />
          ))}
        </div>
      </div>
    </>
  );
};
