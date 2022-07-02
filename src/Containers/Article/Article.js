import "./Article.css";
import { useLocation } from "react-router-dom";


function Article() {
  const location = useLocation();

  console.log(location);

  return (
    <div className="article-content">
      <h2>Titre de l'article : {location.state.title}</h2>
      <p>{location.state.body}</p>
    </div>
  );
}

export default Article;
