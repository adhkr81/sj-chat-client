import { useState, useEffect } from "react"
import styles from "./styles.module.css"
import { Chat } from "../Chat/Chat.js"
import { myNameFirst, createRoom } from "../../utilities/utilities" 
import socket from "../../utilities/socket"
import { useMessage } from "./useMessage"


export function ChatRoom ({roomMembers, me, mainRoom, setRoomMembers}) {

    const [ activeChat, setActiveChat ] = useState("group")  
    const meFirstArr = myNameFirst(roomMembers, me)

    useEffect(() => {
      socket.emit('join', me, mainRoom);
    }, [me]);


    let others;
    let room = "group"

    // const { chat } = useMessage(room, me, others, setRoomMembers)
    // const roomMessages = chat.roomMessages[room]
    // console.log(chat)

    return (     
        <div className={styles.container}>
            <div className={styles.textContainer}>{mainRoom}</div>
  
        {/* ----- top buttons ------------------------------------- */}
                <div className={styles.userContainer}>
                        {meFirstArr.map((member, i) => {
                            if (member === me) {
                                return (
                                <div className={styles.leftBtn} key={i + 100}>
                                    <button onClick={() => setActiveChat("group")} className={styles.btn}>
                                        <div className={styles.pfp} key={member}>
                                            {me[0].toUpperCase()}
                                        </div>
                                    </button>
                                </div>
                                )
                            } else if (member !== me) {
                                return (
                                <div className={styles.rightBtn}  key={i + 200}>
                                    <button onClick={() => setActiveChat(member)} className={styles.btn}>
                                        <div className={styles.pfp} key={member}>
                                            {member[0]}
                                        </div>
                                    </button>
                                </div>
                                )
                            }                        
                        })}
                </div>
  
        {/* ----- chat windows ----------------------------------------- */}
                {activeChat === "group" ? (
                                    <div className={styles.leftChat}>
                                        <div>
                                            <Chat me={me} header={me} others={roomMembers.filter((el) => el !== me)} room="group" group={true} setRoomMembers={setRoomMembers} socket={socket}/>
                                        </div>
                                    </div>
                ) : activeChat ? (
                        meFirstArr.map((member, index) => {
                            if (member === activeChat) 
                            {return <div className={styles.rightChat}>
                                        <div>
                                            <Chat me={me} header={member} others={[member]} key={index} room={createRoom(member, me)} group={false} setRoomMembers={setRoomMembers} socket={socket}/>
                                        </div>
                                    </div>} else return null
                                    })
                                    ) : null }
        </div>
    );
  }
  
