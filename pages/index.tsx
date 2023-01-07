import type { NextPage } from 'next';
import HomeFollow from '../components/HomeFollow/HomeFollow';
import HomeList from '../components/HomeList/HomeList';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeFollow />
      <HomeList />
      <HomeList />
      <HomeList />
    </div>  
  )
}

export default Home
