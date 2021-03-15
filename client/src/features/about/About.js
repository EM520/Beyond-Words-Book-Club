import NavBar from "../headerfooter/NavBar";
import styles from "./About.module.css";
import peoplesitting from '../pic/peoplesitting.jpg'
import adplaceholder from '../pic/adplaceholder.png'

export default function About() {
  return (
    <>
    <NavBar />
    <div class={styles.content}>
      <ul>
        <li>
          <h3>About Us</h3>
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
            <span><img src={peoplesitting} alt="Group Reading" height="120px" /></span>
        </li>
        <li>
            <span><img src={adplaceholder} alt="Sponsored Ad" height="120px" /></span>             
        </li>        
      </ul>

  </div>
        {/* <Footer/> */}
      </>
  )}