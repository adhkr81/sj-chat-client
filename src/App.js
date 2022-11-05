import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import { ChatRoom } from "./components/ChatRoom/ChatRoom"
import { Join } from "./components/Join/Join"


import "./app.css"


function App() {

  const [ roomMembers, setRoomMembers ] = useState([])
  const [ me, setMe ] = useState("")
  const [ mainRoom, setMainRoom ] = useState('');

  let myProps = {
    me,
    setMe,
    mainRoom,
    setMainRoom,
    roomMembers,
    setRoomMembers}


  return (
    <div className="app">
        <Routes>
            <Route path="/" element={<Join {...myProps}/>} />
            <Route path="/chatroom" element={<ChatRoom {...myProps}/>} />           
        </Routes>
    </div>

  );
}

export default App;