import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDiets,
  getRecipes,
  orderName,
  orderScore,
  filterDiets,
  filterDbAPi,
} from "../Redux/Actions/index";
import Card from "./Card";
import Paginado from "./Paginado";
import s from "../Module.css/Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage, setRecipePerPage] = useState(9); // eslint-disable-line
  const indexOflastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOflastRecipe - recipePerPage;
  const currentRecipe = recipes.slice(indexOfFirstRecipe, indexOflastRecipe);

  console.log(recipes)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(document.location.reload());
  }


  function handleFliterDiets(e) {
    dispatch(filterDiets(e.target.value));
    setCurrentPage(1);
  }

  function handleFrom(e) {
    e.preventDefault();
    dispatch(filterDbAPi(e.target.value));
  }

  const [order, setOrder] = useState(""); // eslint-disable-line
  const [score, setScore] = useState(""); // eslint-disable-line

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
      <div className={s.barra}>
        <div>
          <div className={s.select}>
            <select
              className={s.filtroscore}
              onChange={(e) => handleOrderScore(e)}
            >
              <option hidden selected>
                Score
              </option>
              <option value="max">Max</option>
              <option value="min">Min</option>
            </select>
            <select
              className={s.filtroorden}
              onChange={(e) => {
                handleOrderName(e);
              }}
            >
              <option hidden selected>
                Order
              </option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
            <select
              className={s.filtroorden}
              onChange={(e) => {
                handleFrom(e);
              }}
            >
              <option hidden selected>
                From
              </option>
              <option value="ALL">All</option>
              <option value="DB">DB</option>
              <option value="API">API</option>
            </select>
            <select
              className={s.filtrodiets}
              onChange={(e) => handleFliterDiets(e)}
            >
              <option hidden selected>Diets</option>
              <option value="all">All</option>
              {diets?.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button className={s.recarga} onClick={(e) => handleClick(e)}>
              Reload Recipe
            </button>
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
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
