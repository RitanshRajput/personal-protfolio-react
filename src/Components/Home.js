import React, { useRef } from 'react'
import { animate,  motion } from "framer-motion" ;
import Typewriter from "typewriter-effect" ;
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"; 
import me from '../Assests/me.jpg' ;


const Home = (resizeRatio) => {

  const clientCount = useRef(null) ;
  const projectCount = useRef(null) ;

  const animationClientsCount = ()=>{
      animate(0, 100, {
        duration: 1,
        onUpdate : (v)=> (clientCount.current.textContent = v.toFixed()) ,
      })
  }

  const animationProjectsCount = ()=>{
    animate(0, 500, {
      duration: 1,
      onUpdate : (v)=> (projectCount.current.textContent = v.toFixed()) ,
    })
}

    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
      };

  return (
    <div id="home">
      <section>
        <div>
           
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Ritansh Singh
          </motion.h1>

          <Typewriter options={{
            strings:["A Developer", "A Designer", "An Enthusiast"] ,
            autoStart: true,
            loop: true,
            cursor:"",
            wrapperClassName:" typewriterpara"
          }} />

          <div>
            <a href="mailto:ritanshrajput21@gmail.com">
                Hire Me
            </a>
            <a href="#work">
            Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p> +
              {
                resizeRatio < 2 &&
             <motion.span 
             whileInView={animationClientsCount} 
             ref={clientCount}></motion.span>
                
              }
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
          <article>
            <p> +
             {
              resizeRatio < 2 &&
              <motion.span 
             whileInView={animationProjectsCount} 
             ref={projectCount}></motion.span>
             }
            </p>
            <span>Projects Done</span>
          </article>

          <article data-special>
            <p>contact</p>
            <span>ritanshrajput21@gmail.com</span>
          </article>
          </aside>

        </div>
      </section>
      <section>

        <img src={me} alt="Ritansh" />
      </section>
      <BsChevronDown  />
    </div>
  )
}

export default Home ;
