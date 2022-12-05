import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <h2>&copy; 2022 Ritik Raj</h2>
        <img src="mylogo.png" alt="RR" />
        <div className="logolink">
            <a href="https://github.com/ritikraj2227" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ritikraj2227" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/Ritik_Raj_2227" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/_haters._.hate._.2227_?r=nametag" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </>
  )
}
