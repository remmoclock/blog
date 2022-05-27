import "./Card.css";

import { v4 as uuidv4 } from "uuid";

function Card({ articles }) {
  return articles.map((article) => {
    return (
      <div className="card" key={uuidv4()}>
        <h2>{article.title}</h2>
        <a href="/">Lire l'article</a>
      </div>
    );
  });
}
export default Card;
