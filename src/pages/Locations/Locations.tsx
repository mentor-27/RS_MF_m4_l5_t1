import { LocationCard, SortButton } from '../../components';
import { locations } from '../../db/location.ts';
import { useSort } from '../../hooks/useSort.tsx';

import styles from './Locations.module.css';

export const Locations = () => {
  const { dataArr, toggleSort } = useSort(locations);

  return (
    <>
      <h1 className={styles.caption}>Locations</h1>
      <div className={styles.container}>
        <SortButton onClick={toggleSort} />
        <div className={styles.locations}>
          {dataArr.map(dataItem => (
            <LocationCard key={dataItem.id} location={dataItem} />
          ))}
        </div>
      </div>
    </>
  );
};
