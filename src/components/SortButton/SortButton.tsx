import styles from './SortButton.module.css';

export const SortButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      <div className={styles.glyph}>⇅</div>
    </button>
  );
};
