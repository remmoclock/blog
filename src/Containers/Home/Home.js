import Card from "../../Components/Card/Card";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "../../redux/articles/articleReducer";
import { v4 as uuidv4 } from "uuid";

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
        {articles.map((article) => {
          return <Card title={article.title} key={uuidv4()} />;
        })}
      </div>
    </>
  );
}

export default Home;
