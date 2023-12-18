import HomeInfo from "components/Home/HomeInfo";
import HomeProduct from "components/Home/HomeProduct";
import styles from './home.module.css'
import HomeImg from 'assets/images/home/home.png'

const Home = () => {
  return (
    <div className={styles.home}>
      <img
        className={styles.img}
        src={HomeImg}
        alt="hame"
      />
      <div className="container">
        <HomeInfo />
        <HomeProduct />
      </div>
    </div>
  )
};

export default Home;
