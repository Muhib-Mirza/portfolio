import Navbar from "@/Component/Navbar";
import Head from "next/head";
import style from "../styles/Home.module.css";
import { motion } from "framer-motion";
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
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repellendus quia ullam? Distinctio quae a explicabo vero blanditiis
        voluptas esse sint quis voluptatibus, ab eligendi maiores quo pariatur
        hic perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga repellendus quia ullam? Distinctio quae a explicabo vero
        blanditiis voluptas esse sint quis voluptatibus, ab eligendi maiores quo
        pariatur hic perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga repellendus quia ullam? Distinctio quae a
        explicabo vero blanditiis voluptas esse sint quis voluptatibus, ab
        eligendi maiores quo pariatur hic perferendis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Fuga repellendus quia ullam?
        Distinctio quae a explicabo vero blanditiis voluptas esse sint quis
        voluptatibus, ab eligendi maiores quo pariatur hic perferendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quia
        ullam? Distinctio quae a explicabo vero blanditiis voluptas esse sint
        quis voluptatibus, ab eligendi maiores quo pariatur hic perferendis?
      </div>
    </>
  );
}
