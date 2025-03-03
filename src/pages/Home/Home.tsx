import styles from './Home.module.css';
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Welcome to Rick & Morty's universe! 🖐🏻</h2>
      <div className={styles.logoBg}>
        <img src={logo} className={styles.logo} />
      </div>
    </div>
  );
};

export default Home;
