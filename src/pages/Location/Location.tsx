import { useLocation } from 'react-router-dom';

import { TLocation } from '../../components/types';
import { BackButton } from '../../components';

import styles from './Location.module.css';

export const Location = () => {
  const {
    state: { location },
  }: { state: { location: TLocation } } = useLocation();

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
