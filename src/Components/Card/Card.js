import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <Link
        to={{
          pathname: `articles/${title}`,
          state: { fromDashboard: true },
        }}
      >
        Lire l'article
      </Link>
    </div>
  );
}
export default Card;
