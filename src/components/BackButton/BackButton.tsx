import { useNavigate } from 'react-router-dom';

import styles from './BackButton.module.css';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <div className={styles.glyph}>{'<'}</div>
    </button>
  );
};
