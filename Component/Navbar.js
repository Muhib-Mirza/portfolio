import style from "../styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [flag,setFlag] = useState(false);
  const handleClick = ()=>{
    setFlag(!flag);
    if(flag === true){
      document.querySelector(".section").style.filter = "blur(0)"
    }else{
      document.querySelector(".section").style.filter = "blur(1.2px)"
    }
  }
  const parent = {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{
        type:"tween",
        duration:0.1,
        staggerChildren:0.2,
      }
    }
  }
  const child = {
    initial:{
      y:-40,
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        type:"tween",
        duration:0.2,
      }
    }
  }
    
    return ( 
        <>
        <motion.nav className={style.nav} >
        <div className={style.circleAvatar}>
                <img src="/irfan.svg" alt="" className={style.avatar} />
            </div>
            <div className={style.navContainer}>
                <motion.ol className={style.linkContainer}
                variants={parent}
                initial="initial"
                animate="animate"
                >
                <motion.a href="#about" className={style.link} 
                variants = {child}
                >
                    <span className={style.num}>
                    01.
                    </span>
                    <div className={style.linkTxt} >
                    About
                    </div>
                </motion.a>
                <motion.a href="#about" className={style.link} variants = {child} >
                    <span className={style.num}>
                    02.
                    </span>
                    <div className={style.linkTxt} >
                    Experience
                    </div>
                </motion.a>
                <motion.a href="#about" className={style.link} variants = {child} >
                    <span className={style.num}>
                        03.
                    </span>
                    <div className={style.linkTxt} >
                    Work
                    </div>
                </motion.a>
                <motion.a href="#about" className={style.link} variants = {child} >
                    <span className={style.num}>
                    04.
                    </span>
                    <div className={style.linkTxt} >
                    Contact
                    </div>
                </motion.a>
                </motion.ol>
                <motion.a href="/" initial={{
                  opacity:0,
                  y:-40
                }}
                animate={{
                  opacity:1,
                  y:0
                }}
                transition={{
                  delay:0.8,
                  type:"tween",
                  duration:0.2
                }}
                >
                <button className={style.resume}>Resume</button>
                </motion.a>
            </div>
            <GiHamburgerMenu className={style.drawerIcon} onClick={handleClick} />
        </motion.nav>
        <motion.div className={ style.drawer }
        initial={
          {
            translateX:"-100vw",
            opacity:0,
          }
        }
        animate={
          flag ?{
            translateX:"0vw",
            opacity:1,
          }:{
            translateX:"-100vw",
            opacity:0,
          }
        }
        transition={{
          type:"tween",
          duration:0.1,
          ease:"easeInOut"
        }}
        >
          <div className={style.title}>
          <h2 className={style.logo}>
            Irfan Haider
          </h2>
          <RxCross1 className={style.cross} onClick={handleClick} />
          </div>
          <ul className={style.list}>
            <li className={style.listTile}>
            <a href="#about" className={style.link}>
            <span className={style.num}>
                    01.
                    </span>
              <div className={style.headHome}>
              About
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="#experience" className={style.link}>
            <span className={style.num}>
                    02.
                    </span>
              <div className={`${style.headHome} ${style.propt}`}>
              Experience
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="#work" className={style.link}>
            <span className={style.num}>
                    03.
                    </span>
              <div className={style.headHome}>
              Work
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="#contact" className={style.link}>
            <span className={style.num}>
                    04.
                    </span>
              <div className={`${style.headHome} ${style.propt}`}>
              Contact
              </div>
            </a>
            </li>
          <a href="/" >
                <button className={style.resume}>Resume</button>
                </a>
          </ul>
        </motion.div>
        </>
     );
}
 
export default Navbar;