import styles from './About.module.css'
import peoplesitting from '../pic/peoplesitting.jpg'
import adplaceholder from '../pic/adplaceholder.png'
import SearchBar from '../search/SearchBar'

export default function About() {
  return (
    <div className="container1">
      <SearchBar />
      <div class={styles.content}>
        <ul>
          <li>
            <h1>About Us</h1>
            <div className={styles.abouttext}>
              Beyond Words Book Club was created in 2021 by Marissa Burgos, Elena Liu and Stefanie
              Seskin as a place where people can find books to read based on their genres of interest and 
              talk about them with other fans.  Just as the founders experienced lively debates while creating the
              site, they encourage you do do the same!  
              <p><br />Please be kind to one another and have fun!  And drop us a line 
              any time for suggestions!  We'd love to hear from you.  Let us know what books you think we should add.
              We will be updating this site and adding exciting new features.</p>
            </div>
          </li>
          <li>
          <div className={styles.abouttext}>
          <img
              className={styles.people}
              src={peoplesitting}
              alt="Group Reading"
              style={{ width: 200, float: 'left' }}
            />
              <div><h5>Things You Can Do Here</h5></div>
              After you sign up for an account, select your favorite genres (as many as you want!) 
              Your personalized homepage will list books in those genres.  Check out more titles 
              in those genres.  Visit the bookclub, join and discuss!  Change your genre selection at 
              any time on your profile page.  
              <p><br />The founders strive to make this a fun place to get together and talk.  
              Like you, we have a passion for reading.  We will soon be adding a section where you can
              add books that you would like to trade with others!</p>
            </div>  


          </li>
          <li>
            <img className={styles.ad} src={adplaceholder} alt="Sponsored Ad" />
          </li>
        </ul>
      </div>
    </div>
  )
}
