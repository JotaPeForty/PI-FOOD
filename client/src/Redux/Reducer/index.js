import {
  GET_ALL_RECIPES,
  REMOVE_RECIPE,
  GET_RECIPE,
  GET_DIETS,
  ORDER_NAME,
  CREATE_RECIPE,
  FILTER_DIETS,
  GET_RECIPE_SEARCH,
  ORDER_SCORE,
  GET_DISHTYPES,
} from "../Actions/index";

const inicialState = {
  recipes: [],
  recipe: [],
  diets: [],
  dishtypes: [],
};

export default function reducer(state = inicialState, { type, payload }) {
  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        recipes: payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };
    case GET_DISHTYPES:
      return {
        ...state,
        dishtypes: payload,
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: payload,
      };
    case GET_RECIPE_SEARCH:
      return {
        ...state,
        recipes: payload,
      };
    case REMOVE_RECIPE:
      return {
        ...state,
      };
    case FILTER_DIETS:
      const allRecipe = state.recipes;
      const dietsFilter =
        payload === "all"
          ? allRecipe
          : allRecipe.filter((e) => e.diets.includes(payload));
      return {
        ...state,
        recipes: dietsFilter,
      };
    case ORDER_NAME:
      let orderName =
        payload === "az"
          ? state.recipes.sort(function (a, b) {
              if (a.title > b.title) {
                return 1;
              }
              if (a.title < b.title) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.title > b.title) {
                return -1;
              }
              if (a.title < b.title) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: orderName,
      };
    case ORDER_SCORE:
      let orderScore =
        payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.score > b.score) {
                return 1;
              }
              if (a.score < b.score) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.score > b.score) {
                return -1;
              }
              if (a.score < b.score) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: orderScore,
      };

    default:
      return state;
  }
}
