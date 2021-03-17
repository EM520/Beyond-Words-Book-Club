import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'
import styles from "./Signupform.module.css"
import NavBar from "../headerfooter/NavBar";
import Footer from "../headerfooter/Footer";
import {
  
  selectGenre,
   setGenres,
  getGenres,
  
} from "./signupformSlice";

export default function Signupform (){
const genre = useSelector(selectGenre);
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getGenres());
  }, []);

function handleSubmit(){

}

    return(
        <>
        <NavBar />
        
        <div className={styles.signupform}>
        
            <form onSubmit={handleSubmit} >
                <div className={styles.signupform1}>
                <input placeholder="Input your username"/>
                <input placeholder="Input your password"/>
                <input placeholder="Comfirm your password"/>
                <input placeholder="Input your Email"/>
                <textarea name="signupform1" rows="9" cols="50"
                placeholder="Talk about yourself"></textarea>
                </div>

                <div className={styles.signupform2}> 
                <div className={styles.signupAvatar}>
                Upload Your Avatar
               </div>
               <button className={styles.uploadBtn}>Upload your avatar</button>
                <input placeholder="Input your first name"/>
                <input placeholder="Input your last name"/>
                </div>
                
            </form>
            
                    <button className={styles.submitBtn}>Submit</button>
                    <div>
                <h1>Choose your Favorite Genre</h1>   
            <div className={styles.signupformGenreList}> 
            
             {genre.map((item)=>(
                 <>
                        <p key={"genre-" + item.id}>{item.name}</p>
                        <input type="checkbox" />
                    <span class="checkmark"></span>
                </>
                    ))}
                    
            </div>
            <button className={styles.submitBtn}>Submit</button>
            </div>
            <Footer/>
        </div>
        
         
        </>
       
        )
    
}