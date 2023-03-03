import React from 'react'
import luffy from "../Assests/luffy.jpg" ;
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai';


const Footer = () => {
  return (
   <footer>
    <div>
     <img src={luffy} alt="Founder" />  
     <h2>Ritansh Singh</h2>
     <p>When I wrote this code, only God and I understood what I did. Now only God knows.</p>
    </div>

    <aside>
     <h2>Social Media</h2>
      <article>
        <a href="https://youtube.com/6packprogrammer" target={"blank"} ><AiFillYoutube /></a>
        <a href="https://instagram.com/6packprogrammer" target={"blank"} ><AiFillInstagram /></a>
        <a href="https://github.com/meabhisingh" target={"blank"} ><AiFillGithub /></a>
      </article>
    </aside>

    <a href="#home"> <AiOutlineArrowUp /> </a>
   </footer>
  ) ;
} ;

export default Footer
