import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeSearch } from "../Redux/Actions";
import s from "../Module.css/Search.module.css";
import { VscSearch } from "react-icons/vsc";

function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleImputSearch(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipeSearch(name));
    setName("")
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        value={name}
        type="search"
        placeholder="Search Recipe...."
        onChange={(e) => handleImputSearch(e)}
      />
      <button
        className={s.search}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
       <VscSearch/>
      </button>
    </form>
  );
}

export default Search;
