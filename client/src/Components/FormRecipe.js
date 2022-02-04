import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets,  } from "../Redux/Actions/index";
import s from "../Module.css/FormRecipe.module.css";

function FormRecipe() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  

  const [form, setForm] = useState({
    title: "",
    score: "",
    healthscore: "",
    dishtypes: [],
    image: "",
    summary: "",
    instructions: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);
  

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipe(form));
    setForm({
      title: "",
      score: "",
      healthscore: "",
      dishtypes: [],
      image: "",
      summary: "",
      instructions: "",
      diets: [],
    });
  };


  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  

  return (
    <div className={s.container}>
      <br />
      <br />
      <div className={s.container2}>
        <h1 className={s.h1}>Create Recipes</h1>
        <form className={s.form} method="post" onSubmit={onSubmit}>
          <input
            className={s.input}
            value={form.title}
            onChange={(e)=>handleOnChange(e)}
            placeholder="Title"
            name="title"
            type="text"
          />
          <input
            className={s.input}
            value={form.image}
            onChange={(e)=>handleOnChange(e)}
            placeholder="Image"
            name="image"
            type="text"
          />
          <div className={s.divscore}>
            <input
              className={s.inputN}
              value={form.score}
              onChange={(e)=>handleOnChange(e)}
              placeholder="Score"
              name="score"
              type="text"
            />
            <input
              className={s.inputN}
              value={form.healthscore}
              onChange={(e)=>handleOnChange(e)}
              placeholder="Health Score"
              name="healthscore"
              type="text"
            />
          </div>
            <input
              className={s.input}
              value={form.dishtypes}
              onChange={(e)=>handleOnChange(e)}
              placeholder="Dish Types"
              name="dishtypes"
              type="text"
            />

          <textarea
            className={s.input}
            value={form.summary}
            onChange={(e)=>handleOnChange(e)}
            placeholder="Summary"
            name="summary"
            type="text"
          />
          <textarea
            className={s.input}
            value={form.instructions}
            onChange={(e)=>handleOnChange(e)}
            placeholder="Instructions"
            name="instructions"
            type="text"
          />
          <div className={s.check}>
            {diets?.map((e) => (
                <label key={e.id}>
                  <input
                    className={s.inputcheck}
                    onChange={(e) => handleOnChange(e)}
                    type="checkbox"
                    name="diets"
                    key={e.id}
                    value={e.id}
                    />
                  {e.name}
                </label>
              ))}
          </div>
          <br />
          <input className={s.button} type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}

export default FormRecipe;
