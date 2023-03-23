import React, { useState, useEffect } from "react";
import logo from '../../assets/logo-pink.png'
import './Welcome.css'


function Welcome() {
  const [timeOut, setTime] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTime(false)
    }, 6000)
  }, [timeOut])


  return (
    <section className="welcome_container">
      {
        timeOut &&
        <div className="welcome_section">
          <img alt="logo" src={logo} className="welcome_logo" />
        </div>
      }

    </section>
  )
}


export { Welcome };