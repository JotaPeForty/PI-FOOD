import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const SET_TITLE = "SET_TITLE";
export const GET_RECIPE = "GET_RECIPE";
export const FILTER_DIETS = "FILTER_DIETS";
export const GET_DIETS = "GET_DIETS";
export const ORDER_NAME = "ORDER_NAME";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const GET_RECIPE_SEARCH = "GET_RECIPE_SEARCH";
export const ORDER_SCORE = "ORDER_SCORE";
export const GET_DISHTYPES = "GET_DISHTYPES";
export const FILTER_DB = "FILTER_DB";


export const createRecipe = (recipe) => {
  return (dispatch) => {
    axios
      .post(`/recipes/create`, recipe)
      .then((response) => {
        return dispatch({
          type: CREATE_RECIPE,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getRecipes = () => {
  return (dispatch) => {
    axios
      .get(`/recipes`)
      .then((recipes) => {
        return dispatch({
          type: GET_ALL_RECIPES,
          payload: recipes.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const diets = await axios.get(`/diet/type`);
      return dispatch({
        type: GET_DIETS,
        payload: diets.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
export const getDishTypes = () => {
  return async (dispatch) => {
    try {
      const dishtypes = await axios.get(`/dishtypes`);
      return dispatch({
        type: GET_DISHTYPES,
        payload: dishtypes.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};


export const getRecipe = (id) => {
  return async (dispatch) => {
    try {
      const idRecipe = await axios.get(
        `/recipes/id/${id}`
        );
      return dispatch({
        type: GET_RECIPE,
        payload: idRecipe.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getRecipeSearch = (name) => {
  return async (dispatch) => {
    try {
      const searchName = await axios.get(
        `/recipes/${name}`
      );
      return dispatch({
        type: GET_RECIPE_SEARCH,
        payload: searchName.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const removeRecipe = () => {
  return {
    type: REMOVE_RECIPE,
    payload: {},
  };
};
export const filterDiets = (payload) => {
  return {
    type: FILTER_DIETS,
    payload,
  };
};
export const orderName = (payload) => {
  return {
    type: ORDER_NAME,
    payload,
  };
};
export const orderScore = (payload) => {
  return {
    type: ORDER_SCORE,
    payload,
  };
};
export function filterDbAPi(payload) {
  return {
    type: FILTER_DB,
    payload,
  };
}