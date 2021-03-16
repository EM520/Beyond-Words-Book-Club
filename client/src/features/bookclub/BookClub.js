import NavBar from "../headerfooter/NavBar"
import Footer from "../headerfooter/Footer";
import BookDetail from "./BookDetail"
import Discussions from "./Discussions"
import styles from "./BookClub.module.css"

export default function BookClub() {
  return (
    <>
      <div>
        <NavBar />
        <div className = {styles.clubmain}>
        <BookDetail />
        <Discussions />
        </div>
      </div>
      <div className={styles.footer}><Footer/></div>
    </>
  )
}
