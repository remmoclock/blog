import "./Card.css";

function Card({ title }) {
    return (
      <div className="card">
        <h2>{title}</h2>
        <a href="/">Lire l'article</a>
      </div>
    );
}
export default Card;
