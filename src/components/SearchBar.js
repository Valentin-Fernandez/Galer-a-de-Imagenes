import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault(); /* Evita que se envie el formulario */
    onSubmit(term);
  }

  function handleChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div className="contenedor-form">
      <form onSubmit={handleFormSubmit} className="form">
        <input
          value={term}
          onChange={handleChange}
          className="form-input"
          placeholder="Buscar imagenes"
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
