import NavBar from "../headerfooter/NavBar";
import Footer from "../headerfooter/Footer";
import styles from "./About.module.css";
import peoplesitting from '../pic/peoplesitting.jpg'
import adplaceholder from '../pic/adplaceholder.png'
import SearchBar from "../searchbar/SearchBar";


export default function About() {
  return (
    <>
    <NavBar />
    <SearchBar />
    <div class={styles.content}>
      <ul>
        <li>
          <h1>About Us</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
        </li>
        <li>
            <img className={styles.people} src={peoplesitting} alt="Group Reading"  />
        </li>
        <li>
            <img className={styles.ad} src={adplaceholder} alt="Sponsored Ad"  />            
        </li>        
      </ul>

  </div>
  <div className={styles.footer}><Footer/></div>

      </>
  )}