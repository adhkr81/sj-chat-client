import styles from "./styles.module.css"
import { nanoid } from 'nanoid'

export function Messages ({roomMessages, me}) {

    return (

        <div className={styles.main}>
            {roomMessages.map((current) => {
                if (current.author === "admin") {
                    return (
                    <div className={styles.messageAdmin} key={nanoid()}>
                        <div className={styles.textContainerAdmin}>{current.content}</div>
                     </div>
                    )
                } else if (current.author === me) {
                    return (
                    <div className={styles.messageRight} key={nanoid()}>
                        <div className={styles.textContainerRight}>{current.content}</div>
                     </div>
                    )
                } else if (current.author !== me && current.author !== "admin") {
                    return (
                    <div className={styles.messageLeft} key={nanoid()}>
                        <div className={styles.pfpChat}><img src="" alt=""/></div>
                        <div className={styles.textContainerLeft}>{current.content}</div>
                     </div>
                    )
                }                 
            })}
        </div>
    )
}