import Navbar from "@/Component/Navbar";
import Head from "next/head";
import style from "../styles/Home.module.css";
import { motion } from "framer-motion";
import astyle from "../styles/About.module.css"
import { useState } from "react";

export default function Home() {
  const infoPrent = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "tween",
        delayChildren: 1,
        staggerChildren: 0.2,
        duration: 0.1,
      },
    },
  };
  const infoChild = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",

        duration: 0.2,
      },
    },
  };
  const aboutParent={
    initial:{
      opacity:0
    },
    animate:{
      opacity:1,
      transition:{
        type:"tween",
        duration:0.2,
        staggerChildren:0.4,
      }
    }
  }
  const aboutChild ={
    initial:{
      opacity:0,
      y:50
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        type:"tween",
        duration:0.2,
      }
    }
  }
  const [aboutFlag,setAboutFlag] = useState(false);
  const [greenBox,setGreenBox] = useState(false);
  return (
    <>
      <Head>
        <title>Irfan Haider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/i.png" />
      </Head>
      <Navbar />
      <motion.div
        className={`${style.section} section`}
        variants={infoPrent}
        initial="initial"
        animate="animate"
      >
        <motion.div className={style.smallTxt} variants={infoChild}>
          <span className={style.hi}>Hi,</span>
          <span className={style.myn}>my name is</span>
        </motion.div>
        <motion.div className={`${style.name} name`} variants={infoChild}>
          Irfan Haider.
        </motion.div>
        <motion.div
          className={style.thing}
          variants={infoChild}>
          I build things for the web.
        </motion.div>
        <motion.div className={style.company} variants={infoChild}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at
          <a href="/" className={style.compname}>
            Upstatement.
          </a>
        </motion.div>
        {/* GMAIL Container */}
        <a href="/" className={style.btnContainer}>
          <motion.button
            className={style.resume}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "tween",
              duration: 0.1,
              delay: 1.8,
            }}
          >
            Check out my course!
          </motion.button>
        </a>
      </motion.div>
      <motion.div
        className={style.mailContainer}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 0.2,
          delay: 1.9,
        }}
      >
        <a href="mailto:" className={style.gmail}>
          {" "}
          <span className={style.mail}> mirzamuhib8@gmail.com </span>{" "}
          <hr className={style.mailLine} />
        </a>
      </motion.div>
      {/* About section */}
      <div className={astyle.aboutContainer} id="about">
        <motion.div className={astyle.aboutTextContainer} variants={aboutParent} initial="initial" 
        animate={
          aboutFlag ? "animate" : "initial"
        }
        >
        <motion.div className={astyle.about} variants={aboutChild}>
          <span>01.</span> <span className={astyle.aboutHead}>About Me</span> <hr className={astyle.aline} />
        </motion.div>
        <motion.p className={`${astyle.para}`} variants={aboutChild} onViewportEnter={()=>setAboutFlag(true)}>
        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </motion.p>
        <motion.p className={`${astyle.para} ${astyle.para2}`} variants={aboutChild}>
        Fast-forward to today, and I’ve had the privilege of working at an
        <a href="/" className={astyle.compname}> advertising agency</a>,<a href="/" className={astyle.compname}> a start-up</a>,<a href="/" className={astyle.compname}> a huge corporation</a>,<a href="/" className={astyle.compname}> and a student-led design studio.</a> My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
        </motion.p>
        <motion.p className={`${astyle.para} ${astyle.para2}`} variants={aboutChild}>
        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
        </motion.p>
        <motion.p className={`${astyle.para} ${astyle.para2}`} variants={aboutChild}>
        Here are a few technologies I’ve been working with recently:
        </motion.p>
        <ul className={astyle.list}>
          <li className={astyle.listData}>JavaScript</li>
          <li className={astyle.listData}>React</li>
          <li className={astyle.listData}>Node.js</li>
          <li className={astyle.listData}>TypeScript</li>
          <li className={astyle.listData}>Eleventy</li>
          <li className={astyle.listData}>WordPress</li>
        </ul>
        </motion.div>
        <motion.div className={astyle.imageContainer} initial={{
          opacity:0,
          y:50
        }} 
        animate={ 
          aboutFlag ?
          {
          opacity:1,
          y:0
        }
        :{
          opacity:0,
          y:50
        }
      }
        transition={{
          type:"tween",
          duration:0.2,
          delay:1.4
        }}
        >
          <motion.div className={astyle.greenBox}
          onMouseEnter={()=>setGreenBox(true)} onMouseLeave={()=>setGreenBox(false)}
          initial={{
            opacity:0
          }}
          animate={
            greenBox ?
            {
              opacity:0
          }:{
            opacity:1
          }
        }
        transition={{
          type:"tween",
          duration:0.2,
        }}
          ></motion.div>
          <img src="/irfan.jpeg" alt="Irfan" className={astyle.avatar} onMouseEnter={()=>setGreenBox(true)} onMouseLeave={()=>setGreenBox(false)} />
          <motion.div className={astyle.border}
          initial={{
            top:"1rem",
            marginLeft:"1rem"
          }}
          animate={
            greenBox ? {
              top:"0.5rem",
              marginLeft:"0.5rem",
            } : {
              top:"1rem",
              marginLeft:"1rem",
            }
          }
          transition={{
            type:"tween",
            duration:0.2,
            ease:"easeInOut"
          }}
          ></motion.div>
        </motion.div>
      </div>
      <div id="experience">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur suscipit id sint error labore quae ducimus veritatis perspiciatis quasi assumenda, fuga eum ut rerum soluta voluptas reprehenderit voluptatem a itaque.</div>
      <div id="work">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla earum nisi eligendi, illo distinctio cum libero aut magni ipsa obcaecati incidunt minus nobis repellat debitis laudantium rem mollitia recusandae sapiente.</div>
      <div id="contact">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloremque sequi, necessitatibus laborum nemo dolore aspernatur labore aperiam quam, perferendis dolorum in maiores eum, molestiae maxime tempora esse ipsa nam.</div>
    </>
  );
}
