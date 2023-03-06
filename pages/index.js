import Navbar from "@/Component/Navbar";
import Head from "next/head";
import style from "../styles/Home.module.css";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Head>
        <title>Irfan Haider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/i.png" />
      </Head>
      <Navbar />
      <div className={`${style.section} section`}>
        <div className={style.smallTxt}>
          <span className={style.hi}>Hi,</span>
          <span className={style.myn}>my name is</span>
        </div>
        <div className={style.name}>Irfan Haider.</div>
        <div className={style.thing}>I build things for the web.</div>
        <div className={style.company}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at 
        <motion.a href="/" className={style.compname} >
          Upstatement.
        </motion.a>
        </div>
        <a href="/" >
                <button className={style.resume}>Check out my course!</button>
                </a>
      </div>
    </>
  );
}
