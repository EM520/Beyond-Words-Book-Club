
import styles from './SubmitBtn.module.css'

export default function SubmitButton(props) {
    function handleClick(){
        props.onClick()
    }
    
    return (
        <div>
            <button onSubmit={handleClick}className={styles.submitBtn}>Submit</button>
            <div className={styles.profileSubmit}></div>
        </div>

  )
}
