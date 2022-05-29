import React from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <h1 className="title-form">Écrivez un article </h1>
      <form className="container-form">
        <label htmlFor="title">Titre</label>
        <input id="title" type="text" />
        <label htmlFor="article">Votre article</label>
        <textarea id="article" placeholder="Votre article"></textarea>
        <button>Publier l'article</button>
      </form>
    </>
  );
}

export default Form;
