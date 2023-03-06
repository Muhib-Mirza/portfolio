import style from "../styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { animate, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [flag,setFlag] = useState(false);
  const handleClick = ()=>{
    setFlag(!flag);
  }
    return ( 
        <>
        <nav className={style.nav}>
        <div className={style.circleAvatar}>
                <img src="/irfan.svg" alt="" className={style.avatar} />
            </div>
            <div className={style.navContainer}>
                <ol className={style.linkContainer}>
                <a href="#about" className={style.link} >
                    <span className={style.num}>
                    01.
                    </span>
                    <div className={style.linkTxt} >
                    About
                    </div>
                </a>
                <a href="#about" className={style.link} >
                    <span className={style.num}>
                    02.
                    </span>
                    <div className={style.linkTxt} >
                    Experience
                    </div>
                </a>
                <a href="#about" className={style.link} >
                    <span className={style.num}>
                        03.
                    </span>
                    <div className={style.linkTxt} >
                    Work
                    </div>
                </a>
                <a href="#about" className={style.link} >
                    <span className={style.num}>
                    04.
                    </span>
                    <div className={style.linkTxt} >
                    Contact
                    </div>
                </a>
                </ol>
                <a href="/">
                <button className={style.resume}>Resume</button>
                </a>
            </div>
            <GiHamburgerMenu className={style.drawerIcon} onClick={handleClick} />
        </nav>
        <motion.div className={ style.drawer }
        initial={
          {
            x:"100vw",
            
          }
        }
        animate={
          flag ?{
            x:0,
            
          }:{
            x:"100vw",
            
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
          <a href="/">
                <button className={style.resume}>Resume</button>
                </a>
          </ul>
        </motion.div>
        </>
     );
}
 
export default Navbar;