import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getRecipe, removeRecipe } from "../Redux/Actions/index";
import s from "../Module.css/Recipes.module.css";
import { FcApproval, FcLike } from "react-icons/fc";

function Recipes(props) {
  const id = props.match.params.id;
  const recipe = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const history = useHistory();
  //console.log(" ESTO TRAE ID", id)
  //console.log(" ESTO TRAE RECIPE", recipe)

  useEffect(() => {
    dispatch(getRecipe(id));
    return () => {
      dispatch(removeRecipe());
    };
  }, [dispatch, id]);

  const goToBack = () => {
    history.goBack();
  };

  return (
    <div className={s.container}>
      <br />
      <div className={s.container2}>
        <button className={s.button} onClick={goToBack}>
          Return
        </button>
        {recipe?.id ? (
          <div key={recipe.id}>
                <h1 className={s.h1}>{recipe.title}</h1>
            <div className={s.container3}>
              <div className={s.container4}>
                <img className={s.img} src={recipe.image} alt="" />
              </div>
              <div className={s.container5}>
                <h5 className={s.h5}>
                  {recipe.dishtypes?.map((e) => (
                    <p>{e}</p>
                  ))}
                </h5>
                <br/>
                <div className={s.contscore}>
                  <p>
                    <FcLike />
                    {recipe.score}
                  </p>
                  <p>
                    <FcApproval />
                    {recipe.healthscore}
                  </p>
                </div>
                <br/>
                <h5 className={s.diet}>
                  {recipe?.diets?.map((e) => (
                    <p>{e}</p>
                  ))}
                </h5>
              </div>
            </div>
            <div className={s.text}>
            <hr/>
            <article>{recipe.summary.replace(/<[^>]*>?/g, "")}</article>
            <hr/>
            <span>
              {recipe.instructions?.map((e) => (
                <li key={e.number}>
                 <b> Step {e.number}:</b> {e.content}
                </li>
              ))}
            </span>
          </div>
          <br />
          </div>
        ) : (
          <div className={s.h5}>Cargando...</div>
        )}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Recipes;
