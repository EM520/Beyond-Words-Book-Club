import NavBar from '../headerfooter/NavBar'
import Footer from '../headerfooter/Footer'
import styles from './About.module.css'
import peoplesitting from '../pic/peoplesitting.jpg'
import adplaceholder from '../pic/adplaceholder.png'
import SearchBar from '../searchbar/SearchBar'

export default function About() {
  return (
    <>
      <SearchBar />
      <div class={styles.content}>
        <ul>
          <li>
            <h1>About Us</h1>
            <div className={styles.abouttext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </div>
          </li>
          <li>
            <img
              className={styles.people}
              src={peoplesitting}
              alt="Group Reading"
            />
            <div className={styles.abouttext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat{' '}
            </div>
          </li>
          <li>
            <img className={styles.ad} src={adplaceholder} alt="Sponsored Ad" />
          </li>
        </ul>
      </div>
    </>
  )
}
