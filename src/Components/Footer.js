import React from 'react'
// import Mailto from 'react-mailto'
import { FaLinkedin,FaTelegram,FaGithub } from "react-icons/fa";
import {BsMedium} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
const Footer = () => {

  return (
    <section className="footer topBottom">
    <footer className="bg-dark py-3">
      <div className="container col item social "  style={{padding:"20px"}}>
        <div className='social-icons' style={{alignContent:"center",display:"flex",justifyContent:"center"}}>
        <a href='//linkedin.com/in/agneslily-27072002' target="_blank" rel='noopener noreferrer'><FaLinkedin style={{margin:"0 20px 0 20px"}} size="50px" color="skyblue"/></a>
        <a href='//t.me/AgnesLily' target="_blank" rel='noopener noreferrer'><FaTelegram style={{margin:"0 20px 0 20px"}} size="50px" color="lightgreen"/></a>
        <a href='//github.com/AgnesLily2772' target="_blank" rel='noopener noreferrer'><FaGithub style={{margin:"0 20px 0 20px"}} size="50px" color="lightpink"/></a> 
        <a href='//agneslily2772.medium.com' target="_blank" rel='noopener noreferrer'><BsMedium style={{margin:"0 20px 0 20px"}} size="50px" color="lightslategray"/></a>
        </div> 
        <div>
        <p className="m-0 text-center text-white">
          Copyright &copy; Agnes Lily 2022
        </p> 
        </div>
      </div>
    </footer>
  </section>
  )
}

export default Footer