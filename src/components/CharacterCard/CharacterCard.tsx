import { Link } from 'react-router-dom';

import { TCharacterCardProps } from '@types';
import { intrenalRoutes } from '@routes';

import styles from './CharacterCard.module.css';

export const CharacterCard: React.FC<TCharacterCardProps> = ({
  character,
  ref,
}) => {
  return (
    <Link
      to={intrenalRoutes.character(character.id.toString())}
      className={styles.link}
      state={{ character }}
    >
      <div ref={ref} className={styles.characterContainer}>
        <div className={styles.characterImageContainer}>
          <img
            className={styles.characterImage}
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className={styles.characterInfoBlock}>
          <span className={styles.nameSign}>{character.name}</span>
          <span className={styles.speciesSign}>{character.species}</span>
        </div>
      </div>
    </Link>
  );
};
