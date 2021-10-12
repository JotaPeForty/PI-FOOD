import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router";
import { createRecipe, getDiets,  } from "../Redux/Actions/index";
// import Select from "react-select";
import s from "../Module.css/FormRecipe.module.css";

function FormRecipe() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  //const dishtypes = useSelector((state) => state.dishtypes);
  
  //const history = useHistory();
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
  
  // useEffect(() => {
  //   dispatch(getDishTypes());
  // }, [dispatch]);

  // const goToBack = () => {
  //   history.goBack();
  // };

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
  


  
  // const handleOnChange2 = (e) => {
  //   const name = e.target.name;
  //   setForm(Object.assign(
  //     form,
  //     form[name].push(e.target.value),
  //   ));
  // };
  //  console.log("esto trae form", form);
  // console.log("form.diets == ", form.diets);

  // const options = [
  //   { value: "gluten free", label: "gluten free" },
  //   { value: "ketogenic", label: "ketogenic" },
  //   { value: "dairy free", label: "dairy free" },
  //   { value: "vegetarian", label: "vegetarian" },
  //   { value: "lacto ovo vegetarian", label: "lacto ovo vegetarian" },
  //   { value: "fodmap friendly", label: "fodmap friendly" },
  //   { value: "vegan", label: "vegan" },
  //   { value: "pescatarian", label: "pescatarian" },
  //   { value: "paleolithic", label: "paleolithic" },
  //   { value: "primal", label: "primal" },
  //   { value: "whole 30", label: "whole 30" },
  // ];
  

  // const handleOnChangeEspecial = (e) => {
  //   if (form.diets.includes(e.target.value)) {
  //     let newRecipe = form.diets.filter((ep) => ep !== e.target.value);
  //     setForm({
  //       ...form,
  //       diets: newRecipe,
  //     });
  //   } else {
  //     setForm({
  //       ...form,
  //       diets: [...form.diets, e.target.value],
  //     });
  //   }
  // };
  return (
    <div className={s.container}>
      <br />
      <br />
      <div className={s.container2}>
        <h1 className={s.h1}>Create Recipes</h1>
        {/* <button onClick={goToBack}>Return</button> */}
        <form className={s.form} method="post" onSubmit={onSubmit}>
          <label>Title</label>
          <input
            className={s.input}
            value={form.title}
            onChange={(e)=>handleOnChange(e)}
            name="title"
            type="text"
          />
          <label>Images</label>
          <input
            className={s.input}
            value={form.image}
            onChange={(e)=>handleOnChange(e)}
            name="image"
            type="text"
          />
          <div className={s.divscore}>
            <label>Score </label>
            <input
              className={s.inputN}
              value={form.score}
              onChange={(e)=>handleOnChange(e)}
              name="score"
              type="text"
            />
            <label> Health Score </label>
            <input
              className={s.inputN}
              value={form.healthscore}
              onChange={(e)=>handleOnChange(e)}
              name="healthscore"
              type="text"
            />
          </div>
          <label> Dish Types </label>
            <input
              className={s.input}
              value={form.dishtypes}
              onChange={(e)=>handleOnChange(e)}
              name="dishtypes"
              type="text"
            />
          {/* <div className={s.check}>
          {dishtypes?.map((e) => (
                <label key={e}>
                  <input
                    className={s.inputcheck}
                    onChange={(e) => handleOnChange2(e)}
                    type="checkbox"
                    name="dishtypes"
                    key={e}
                    value={e}
                    />
                  {e}
                </label>
              ))}
              </div> */}
          <label>Summary</label>
          <textarea
            className={s.input}
            value={form.summary}
            onChange={(e)=>handleOnChange(e)}
            name="summary"
            type="text"
          />
          <label>Instructions</label>
          <textarea
            className={s.input}
            value={form.instructions}
            onChange={(e)=>handleOnChange(e)}
            name="instructions"
            type="text"
          />
          <div className={s.check}>
            {/* <Select
            //value={form.diets}
              onChange={handleOnChange}
              isMulti
              name="diets"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
            /> */}

            {/* <select onChange={handleOnChange} name="diets" multiple size="11">
              {diets.map((e) => (
                <option key={e.id} value={e.name} >
                  {e.name}
                </option>
              ))}
            </select> */}
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
