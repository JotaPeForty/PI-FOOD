import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Module.css/Card.module.css";
import { FcApproval, FcLike } from "react-icons/fc";

const Card = ({ image, title, score, healthscore, id, diets }) => {
  return (
    <div key={id} className={s.card}>
        <p className={s.title}>{title}</p>
      <div className={s.container}>
        <NavLink to={`/recipe/${id}`}>
          <img className={s.img} src={image} alt={title} />
        </NavLink>
        <hr />
          <div className={s.diet}>
            {(typeof diets[0] === "string")?diets.map((e) => (
              <p className={s.pp}>{e}</p>
            )):
            diets.map((e) => (
              <p className={s.pp}>{e.name}</p>))}
          </div>
      </div>
        <div className={s.number}>
          <div className={s.p}>
            <spam className={s.s}>
              <FcLike />
              {score}
            </spam>
            <spam className={s.hs}>
              <FcApproval />
              {healthscore}
            </spam>
          </div>
        </div>
    </div>
  );
};

export default Card;
