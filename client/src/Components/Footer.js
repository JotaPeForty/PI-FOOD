import React from "react";
import s from "../Module.css/Footer.module.css";

function Footer() {
  return (
    <div className={s.container}>
        <div>
          <a className={s.text} href="https://www.soyhenry.com/">
            Henry 2021
          </a>
        </div>

        <div>
        <a className={s.text} href="https://sura.studio">
          SuraStudio ©
        </a>
        </div>
        <div>
        <a className={s.text} href="https://juanpablobenavente.ar">
          JotaPe  ©
        </a>
        </div>
    </div>
  );
}

export default Footer;
