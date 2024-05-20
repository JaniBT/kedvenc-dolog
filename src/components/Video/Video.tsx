import videoBG from "../../assets/videos/HomeVideo.mp4"
import styles from "./Video.module.css"


const Video = () => {
  return (
    <div className={styles.mainVideo}>
        <video src={videoBG} autoPlay={true} muted={true} loop={true}></video>
    </div>
  )
}

export default Video