import React from "react";
import s from "../Module.css/Paginado.module.css"

function Paginado({ recipePerPage, recipes, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(recipes / recipePerPage); i++) {
    pageNumbers.push(i+1);
  }

  return (
    <nav>
      <ul className={s.paginado}>
      
        {
          pageNumbers?.map((e) => (
            
          <button className={s.button} onClick={() => paginado(e)} key={e}>{e}</button>
          ))
          }
      </ul>
    </nav>
  );
}

export default Paginado;
