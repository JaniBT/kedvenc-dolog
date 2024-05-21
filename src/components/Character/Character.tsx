import styles from "./Character.module.css"
import { FaMicrophone } from "react-icons/fa";

const Character = (props: any) => {
  return (
    <div className={styles.character}>
        <div className={styles.characterImage}>
            <img src={props.imgSource} alt="Image of the Characters" />
        </div>
        <div className={styles.characterDescription}>
            <h4>{props.title}</h4>
            <p>{props.paragraph}</p>
            <button type="button"><FaMicrophone /></button>
        </div>
    </div>
  )
}

export default Character