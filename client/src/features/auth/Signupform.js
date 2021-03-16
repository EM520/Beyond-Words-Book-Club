import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'
import styles from "./Signupform.module.css"
import NavBar from "../headerfooter/NavBar";


export default function Signupform (){


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
                <textarea placeholder="Talk about yourself"></textarea>
                </div>

                <div className={styles.signupform2}> 
                <textarea placeholder="Input your Bio"></textarea>
                <input placeholder="Input your first name"/>
                <input placeholder="Input your last name"/>
                <button>Upload your avatar</button>
                </div>

            </form>
            <button>Submit</button>
        </div>
        </>
        )
    
}