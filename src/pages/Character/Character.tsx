import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import { TCharacter } from '../../types';
import { BackButton } from '../../components';

import styles from './Character.module.css';

const cls = classNames.bind(styles);

const Character = () => {
  const {
    state: { character },
  }: { state: { character: TCharacter } } = useLocation();

  return (
    <>
      <h1 className={styles.caption}>{character.name}</h1>
      <div className={styles.container}>
        <BackButton />
        <div className={styles.imageBlock}>
          <img
            className={styles.image}
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.speciesBlock}>
            <span>Species</span>
            <div className={styles.speciesSign}>{character.species}</div>
          </div>
          <div className={styles.typeBlock}>
            <span>Type</span>
            <div className={styles.typeSign}>{character.type || '?'}</div>
          </div>
          <div className={styles.statusBlock}>
            <span>Status</span>
            <div className={styles.statusSign}>{character.status}</div>
          </div>
          <div className={styles.genderBlock}>
            <span>Gender</span>
            <div
              className={cls('genderSign', {
                male: character.gender === 'Male',
                female: character.gender === 'Female',
              })}
            >
              {character.gender}
            </div>
          </div>
        </div>
        <div className={styles.dateSign}>
          {new Date(character.created).toDateString()}
        </div>
      </div>
    </>
  );
};

export default Character;
