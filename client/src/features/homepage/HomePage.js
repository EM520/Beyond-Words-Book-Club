import NavBar from '../nav/NavBar'
import GenresByUser from '../genresbyuser/GenresByUser'
export default function HomePage(){

return (
    <>
    <NavBar/>
    <GenresByUser />
    <div> This is the Main page of Beyond Words Book Club</div>
    {/* <div> NavBar will be on top</div>
    <div>Footer will be on the bottom</div> */}
    </>
    
)
}