import { Link } from 'react-router-dom';

import { TCharacterCardProps } from '../types.ts';
import { intrenalRoutes } from '../../routes.ts';

import styles from './CharacterCard.module.css';

export const CharacterCard: React.FC<TCharacterCardProps> = ({ character }) => {
  return (
    <Link
      to={intrenalRoutes.character(character.id.toString())}
      className={styles.link}
      state={{ character }}
    >
      <div className={styles.characterContainer}>
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
