import { useState } from "react"
import styles from "./styles.module.css"
import socket from "../../../utilities/socket"

export function Input ({ me }) {

  const [ inputText, setInputText ] = useState("")
  const [ message, setMessage ] = useState({author: "", content:""})

    function handleChange(e) {
        setInputText(e.target.value) // to control input
        setMessage({content: e.target.value, author: me})
      }
    
    function handleSubmit(e) {
        e.preventDefault()
    
        if (inputText.length > 0) {
            socket.emit("message", message, me)
            setInputText("")
            setMessage("")
          }}     
    
    function handleKeyUp(e) {
      if (e.key === "Enter") {
          if (inputText.length > 0) {
              setInputText("")
              }}}      
    

    return (
        <div className={styles.footer}>
        <div className={styles.footerContainer}>

                <input className={styles.input} 
                    placeholder="Write a reply.."
                    onChange={handleChange}                        
                    onKeyUp={handleKeyUp}
                    value={inputText}
                    />

            <div>
                <button className={styles.sendBtn}
                         onClick={handleSubmit}>
                            ^
                </button>
            </div>
        </div>
    </div>
    )
}