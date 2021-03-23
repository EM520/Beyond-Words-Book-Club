import React, { useState, useEffect } from 'react'
import styles from './Profile.module.css'

export default function SubmitButton() {
    return (
            <div>
              <button className={styles.submitBtn}>Submit</button>
              <div className={styles.profileSubmit}></div>
           
            </div>
)}