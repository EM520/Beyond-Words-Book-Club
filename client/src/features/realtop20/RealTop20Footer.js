import React from 'react'
import styles from './RealTop20.module.css'
import peopleonbacks from '../pic/peopleonbacks.jpg'
import adtoptwentypage from '../pic/adtoptwentypage.jpg'
import holdingbooks from '../pic/holdingbooks.jpg'

export default function RealTop20Footer() {
  return (
    <>
    <div className={styles.horizontalad}>
        <img className={styles.adtop20} src={peopleonbacks} alt='People on backs reading'></img>
        <img className={styles.adtop20} src={adtoptwentypage} alt='Sponsored'></img>
        <img className={styles.adtop20}src={holdingbooks} alt='Person Holding Books'></img>
    </div>
  </>
  )
}