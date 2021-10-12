import React from "react";
import s from "../Module.css/About.module.css";
import {
    SiSequelize,
    SiReact,
    SiRedux,
    SiJavascript,
    SiNodedotjs,
    SiHtml5,
    SiCss3,
  } from "react-icons/si";

function About() {
  return (
    <div className={s.container}>
      <div>
        <br/>
        <h1 className={s.h1}>Henry 2021 </h1>
        <br/>
        <h2 className={s.h2}>Proyecto Individual</h2>
        <h2 className={s.h2}>Juan Pablo Benavente</h2>
        <br/>
        <article>
            Proyecto Individual FOOD de Juan Pablo Benavente presentado para Henry. || año 2021
        </article>
        <br/>
        <br/>
        <br/>
        <hr/>
        <p className={s.logo}>
        <SiReact className={s.icon} />
        <SiRedux className={s.icon} />
        <SiHtml5 className={s.icon} />
        <SiCss3 className={s.icon} />
        <SiJavascript className={s.icon} />
        <SiNodedotjs className={s.icon} />
        <SiSequelize className={s.icon} />
      </p>
      <hr/>
        <br/>
      </div>
        <br/>
    </div>
  );
}

export default About;
