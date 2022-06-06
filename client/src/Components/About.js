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
  SiExpress,
} from "react-icons/si";

function About() {
  return (
    <div className={s.container}>
      <div className={s.container_text}>
        <br />
        <h2 className={s.h2}>Proyecto Individual</h2>
        <br />
        <h2 className={s.h2}>Juan Pablo Benavente</h2>
        <br />
        <article>
          App Food presentado para Henry 2021
        </article>
      </div>
      <div className={s.cont}>

        <hr />
        <div className={s.container_logos}>
          <p className={s.logo}>
            <SiReact className={s.icon} />
            <br />
            React.js
          </p>
          <p className={s.logo}>
            <SiRedux className={s.icon} />
            <br />
            Redux
          </p>
          <p className={s.logo}>
            <SiHtml5 className={s.icon} />
            <br />
            HTML5
          </p>
          <p className={s.logo}>
            <SiCss3 className={s.icon} />
            <br />
            Css3
          </p>
          <p className={s.logo}>
            <SiJavascript className={s.icon} />
            <br />
            JavaScript
          </p>
          <p className={s.logo}>
            <SiNodedotjs className={s.icon} />
            <br />
            Node.js
          </p>
          <p className={s.logo}>
            <SiSequelize className={s.icon} />
            <br />
            Sequelize
          </p>
          <p className={s.logo}>
            <SiExpress className={s.icon} />
            <br />
            Express.js
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default About;
