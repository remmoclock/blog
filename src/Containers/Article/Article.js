import "./Article.css";
import { useLocation, useParams } from "react-router-dom";

function Article() {
  const location = useLocation();
  // const params = useParams();

  console.log(location);
  // console.log(params);

  return (
    <div className="article-content">
      {/* <h2>Votre article : {location.state.body} </h2>
      <h2>Votre article : {location.state.body} </h2>
      <h2>Votre article : {location.state.body} </h2>
      <h2>Votre article : {location.state.body} </h2> */}
    </div>
  );
}

export default Article;
