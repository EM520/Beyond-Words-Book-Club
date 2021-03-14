import NavBar from "../headerfooter/NavBar"
import GenresByUser from "../genresbyuser/GenresByUser"
import styles from "./HomePage.module.css"
// import styles from './Homepage.css'
export default function HomePage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <GenresByUser />
      </div>
      <div
      // style={{ backgroundImage: url('../../splashPage/splashimages/midbanner-sell-books.jpg') }}
      >
        {/* <img src='../../splashPage/splashimages/midbanner-sell-books.jpg' className= {styles.adPic}/> */}
      </div>
      <div> This is the Main page of Beyond Words Book Club</div>

      {/* <div> NavBar will be on top</div>
    <div>Footer will be on the bottom</div> */}
    </>
  )
}
