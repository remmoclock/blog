import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

function Form() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleInputs = (e) => {
    console.log("test change");
  };

  return (
    <>
      <h1 className="title-form">Écrivez un article </h1>
      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input onChange={handleInputs} id="title" type="text" />
        <label htmlFor="article">Votre article</label>
        <textarea onChange={handleInputs} id="article" placeholder="Votre article"></textarea>
        <button>Publier l'article</button>
      </form>
    </>
  );
}

export default Form;
