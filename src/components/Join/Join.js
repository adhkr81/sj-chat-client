import { Link } from 'react-router-dom';
import styles from "./styles.module.css"

// import Check from '../Check/Check';

export function Join ({me, setMe, roomMembers, setRoomMembers, mainRoom, setMainRoom}) {

    function handleSubmit() {
        const captalizeFirstLetter = me.charAt(0).toUpperCase() + me.slice(1);
        setRoomMembers([...roomMembers, captalizeFirstLetter])
        setMe(captalizeFirstLetter)
    }

    return (
       <div className={styles.container}>
           <div className={styles.textContainer}>
                <h2>Join</h2>
            </div>
                <div><input placeholder="Name" type="text" className={styles.input} onChange={(event) => setMe(event.target.value)} /></div>
                <div><input placeholder="Room" type="text" className={styles.input} onChange={(event) => setMainRoom(event.target.value)} /></div>

                <Link onClick={event => (!me || !mainRoom) ? event.preventDefault() : null} to={`/chatroom`} state={{me: me, mainRoom: mainRoom}}>
                        <button className={styles.btn} onClick={handleSubmit} type="submit">Sign In</button>
                </Link>
       </div>
    )
}



