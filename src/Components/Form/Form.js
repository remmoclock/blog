import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Form.css";

function Form() {
  let navigate = useNavigate();

  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADDARTICLE",
      payload: article,
    });
    setArticle({
      title: "",
      body: "",
    });

    alert("Article publier");
    navigate("https://remmoclock.github.io/blog/");
  };

  const handleInputs = (e) => {
    if (e.target.classList.contains("inp-title")) {
      const newObjState = { ...article, title: e.target.value };
      setArticle(newObjState);
    } else if (e.target.classList.contains("inp-body")) {
      const newObjState = { ...article, body: e.target.value };
      setArticle(newObjState);
    }
  };

  return (
    <>
      <h1 className="title-form">Écrivez un article </h1>
      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          className="inp-title"
          onChange={handleInputs}
          value={article.title}
          id="title"
          type="text"
        />
        <label htmlFor="article">Votre article</label>
        <textarea
          className="inp-body"
          onChange={handleInputs}
          value={article.body}
          id="article"
          placeholder="Votre article"
        ></textarea>
        <button>Publier l'article</button>
      </form>
    </>
  );
}

export default Form;
