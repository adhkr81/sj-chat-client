import { Messages } from "./Messages/Messages"
import { Header } from "./Header/Header"
import { Input } from "./Input/Input"
import { useMessage } from "./useMessage"
import { useState } from "react"


export function Chat({me, others, header, group, room, setRoomMembers}) {


  const { chat } = useMessage(room, me, others, group, setRoomMembers)
  const roomMessages = chat.roomMessages[room]


  return (
    <>
      <Header header={header} />
      <Messages roomMessages={roomMessages} me={me}/>
      <Input me={me}/>
    </>
    )
  }

