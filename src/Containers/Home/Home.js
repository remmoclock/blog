import Card from "../../Components/Card/Card";
import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="home-title">Les articles</h1>
      <div className="container-cards">
        <Card />
      </div>
    </>
  );
}

export default Home;
