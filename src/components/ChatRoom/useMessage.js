import { useState, useEffect } from "react"
import socket from "../../utilities/socket"

export function useMessage(room, me, others, group, setRoomMembers) {

    const [ chat, setChat ] = useState(
        {me: me,
          others: others,
          roomMessages: {[room] : []},
          group: group}
    )

    useEffect(() => {
        socket.on('message', message => {
    
          setChat((chat) => {
              const newState = {...chat, roomMessages: {...chat.roomMessages, [room] : [...chat.roomMessages[room], {content : message.content, author: message.author}]} }
              return newState
          })
        });
    
        socket.on("roomData", usersArray => {
            setRoomMembers(usersArray);     
        });
    
    }, []);

    return { chat }
}