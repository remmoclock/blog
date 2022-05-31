import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, body }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <Link
        to={{
          pathname: `articles/${title.replace(/\s+/g, "-").trim()}`,
          // state: { fromDashboard: true },
          // state: { title: "title" },
        }}
        // state="title"
        state={{ title, body }}
      >
        Lire l'article
      </Link>
    </div>
  );
}
export default Card;
