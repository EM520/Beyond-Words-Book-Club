import NavBar from "../headerfooter/NavBar"
import Footer from "../headerfooter/Footer";
import GenresByUser from "../genresbyuser/GenresByUser"
import styles from "./HomePage.module.css"
import sellbooksad from '../pic/midbanner-sell-books.jpg'
import diversereaders from '../pic/diversereaders.png'
import adspecsclubpage from '../pic/adspecsclubpage.jpg'

// import styles from './Homepage.css'
export default function HomePage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className={styles.bookrow}>
        <GenresByUser />
      </div>
      <div className={styles.horizontalad}>
        <img className={styles.adPic} src={sellbooksad} alt="Sell Us Your Books"  />
        <img className={styles.readers} src={diversereaders} alt="Sell Us Your Books"  />
        <img className={styles.adPic2} src={adspecsclubpage} alt="Your Ad Here"  />
      </div>


      <div className={styles.footer}><Footer/></div>

    </>
  )
}

