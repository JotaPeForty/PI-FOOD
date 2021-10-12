import React from "react";
import s from "../Module.css/Footer.module.css";
import {
  SiSequelize,
  SiReact,
  SiRedux,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

function Footer() {
  return (
    <div className={s.container}>
      <p className={s.text}>| Henry 2001 | SuraStudio © |</p>
      <p className={s.logo}>
        <SiReact className={s.icon} />
        <SiRedux className={s.icon} />
        <SiHtml5 className={s.icon} />
        <SiCss3 className={s.icon} />
        <SiJavascript className={s.icon} />
        <SiNodedotjs className={s.icon} />
        <SiSequelize className={s.icon} />
      </p>
    </div>
  );
}

export default Footer;
