import Card from "../../Components/Card/Card";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getArticles } from "../../redux/articles/articleReducer";

function Home() {
  const { articles } = useSelector((state) => ({
    ...state.articleReducer,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles());
    }
  }, []);

  return (
    <>
      <h1 className="home-title">Les articles</h1>
      <div className="container-cards">
        <Card articles={articles}/>
      </div>
    </>
  );
}

export default Home;
