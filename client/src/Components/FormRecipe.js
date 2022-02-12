import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets,  } from "../Redux/Actions/index";
import s from "../Module.css/FormRecipe.module.css";

function FormRecipe() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  let dataForm = {
    title: "",
    score: "",
    healthscore: "",
    image: "",
    summary: "",
    diets: [],
  }
  

  const [form, setForm] = useState(dataForm);

  const [namesDiet, setNamesDiet] = useState([]);
  const [errors, setErrors] = useState(false);  // eslint-disable-line
  const [success, setSuccess] = useState(false);  // eslint-disable-line


  
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      form.title &&
      form.image &&
      form.score &&
      form.healthscore &&
      form.summary &&
      form.diets
    ) {
    dispatch(createRecipe(form));
    setSuccess(true);
    setErrors(false);
    setForm(dataForm);
    setNamesDiet([]);
  } else {
    setSuccess(false);
    setErrors(true);
  }
};

  const handleSelect = (e) => {
    let index = e.target.selectedIndex;
    if(!namesDiet.includes(e.target.options[index].text)){
      setNamesDiet((names) => [...names, e.target.options[index].text]);
      setForm((form) => ({
        ...form,
        diets: [...form.diets, e.target.value],
      }));
    }else{
      setNamesDiet(namesDiet.filter(name=> name !== e.target.options[index].text))
      setForm((form) => ({
        ...form,
        diets: form.diets.filter(id=> id !== e.target.value),
      }));
    }
  }
  
  
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

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
            className={s.inputN}
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
          <textarea
            className={s.input}
            value={form.summary}
            onChange={(e)=>handleOnChange(e)}
            placeholder="Summary"
            name="summary"
            type="text"
          />
          <div className={s.check}>
            <select className={s.input} onChange={handleSelect}>
              <option hidden selected>Diets</option>
              {diets?.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option> 
              ))}
            </select>
          </div>
          <div>
              <p>
               {/* <h3>Diets: </h3> */}
                <div className={s.temp}>
                  {namesDiet?.map((e, i) => (
                    <div className={s.diet2} key={i}>
                      <p>{e}</p>
                    </div>
                  ))}
                </div>
              </p>
            </div>
          <br />
          <input className={s.button} type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}

export default FormRecipe;
