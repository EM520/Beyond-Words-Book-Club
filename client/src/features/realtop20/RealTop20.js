// import React, { useEffect } from 'react'
// import styles from './RealTop20.module.css'


// export default function RealTop20() {
//   const top20 = useSelector(selectTop20)
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getTop20(1))
//   }, [])
//   return (
//     <>
//       <div className={styles.top20main}>
//         {top20.map((book) => (
//           <div key={'book-' + book.id}>

// <img className={styles.bookList}
// src={book.cover_pic}
// alt={book.title}
// className={styles.bookimage}/>


//             <div className={styles.description}>
//               <p>{`${book.first_name} ${book.last_name}`} - {book.title}</p>//               

//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }