
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipes,
  orderName,
  orderScore,
  filterDiets,
} from "../Redux/Actions/index";
import Card from "./Card";
import Paginado from "./Paginado";
import Footer from "./Footer";
import s from "../Module.css/Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  

  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage, setRecipePerPage] = useState(9);// eslint-disable-line
  const indexOflastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOflastRecipe - recipePerPage;
  const currentRecipe = recipes.slice(indexOfFirstRecipe, indexOflastRecipe);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }


  function handleFliterDiets(e) {
    dispatch(filterDiets(e.target.value));
  }

  const [order, setOrder] = useState("");// eslint-disable-line
  const [score, setScore] = useState("");// eslint-disable-line

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }
  function handleOrderScore(e) {
    e.preventDefault();
    dispatch(orderScore(e.target.value));
    setCurrentPage(1);
    setScore(`Ordenado: ${e.target.value}`);
  }

  return (
  <div className={s.home}>
    <div>
      <div >
        <div className={s.select}>
        <select className={s.filtroscore} onChange={(e) => handleOrderScore(e)}>
          <option value="asc">Min</option>
          <option value="desc">Max</option>
        </select>
        <select className={s.filtrodiets} onChange={(e) => handleFliterDiets(e)}>
          <option value="all">All</option>
          <option value="gluten free">Gluten Free</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="dairy free">Dairy Free</option>
          <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
          <option value="fodmap friendly">Fodmap Friendly</option>
          <option value="vegan">Vegan</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="paleolithic">Paleolithic</option>
          <option value="primal">Primal</option>
          <option value="whole 30">Whole 30</option>
        </select>
        <select className={s.filtroorden} onChange={(e) => {handleOrderName(e)}}>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
        </div>
        <div>
        <button className={s.recarga} onClick={(e) => handleClick(e)}>Reload Recipe</button>
      </div>
      </div>
      <div className={s.paginado}>
        <Paginado
          recipePerPage={recipePerPage}
          recipes={recipes.length}
          paginado={paginado}
        />
      </div>
    </div>
    <div className={s.container}>
      {currentRecipe?.map((e) => {
        return (
          <Card
            id={e.id}
            image={e.image}
            title={e.title}
            score={e.score}
            healthscore={e.healthscore}
            diets={e.diets}
            key={e.id}
          />
        );
      })}
      <br/>
      <br/>
      <br/>
    </div>
      <Footer />
    </div>
  );
}

export default Home;
