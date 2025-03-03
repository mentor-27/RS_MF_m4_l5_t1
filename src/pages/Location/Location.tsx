import { useLocation } from 'react-router-dom';

import { ILocation } from '../../types.ts';
import { BackButton } from '../../components';

import styles from './Location.module.css';

const Location = () => {
  const {
    state: { location },
  }: { state: { location: ILocation } } = useLocation();

  console.log(location);

  return (
    <>
      <h1 className={styles.caption}>{location.name}</h1>
      <div className={styles.container}>
        <BackButton />
        <div className={styles.typeBlock}>
          <span>Type</span>
          <span className={styles.typeSign}>{location.type}</span>
        </div>
        <div className={styles.dimensionBlock}>
          <span>Dimension</span>
          <span className={styles.dimensionSign}>{location.dimension}</span>
        </div>
      </div>
    </>
  );
};

export default Location;
