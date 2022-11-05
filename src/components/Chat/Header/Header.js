import styles from "./styles.module.css"

export function Header ({header}) {
    

    return (
        <div className={styles.header}>
                <div className={styles.avatarContainer}>
                    <div className={styles.pfp}>
                        <img src="" alt=""/>
                    </div>
                    <div className={styles.username}>
                        {header}
                    </div>
                </div>
            <button className={styles.closeBtn}>X</button>
        </div>
    )
}