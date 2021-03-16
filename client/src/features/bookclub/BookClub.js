import NavBar from "../headerfooter/NavBar"
import Footer from "../headerfooter/Footer";
import BookDetail from "./BookDetail"
import styles from "./BookClub.module.css"

export default function BookClub() {
  return (
    <>
      <div>
        <NavBar />
        <BookDetail />
      </div>
      <div className={styles.footer}><Footer/></div>
    </>
  )
}
