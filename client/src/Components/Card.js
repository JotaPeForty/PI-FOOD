import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Module.css/Card.module.css";
import { FcApproval, FcLike } from "react-icons/fc";

const Card = ({ image, title, score, healthscore, id, diets }) => {
  return (
    <div key={id} className={s.card}>
      <div className={s.container}>
        <NavLink to={`/recipe/${id}`}>
          <img className={s.img} src={image} alt={title} />
        </NavLink>
        <p className={s.title}>{title}</p>
        <div className={s.number}>
          <p className={s.p}>
            <spam className={s.s}><FcLike/>{score}</spam>
            <spam className={s.hs}><FcApproval/>{healthscore}</spam>
          </p>
          <div className={s.diet}>
            {diets.map((e) => (
              <p className={s.pp}>{e}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
