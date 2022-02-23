import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="containerHome">
      <button>
        <Link className="link" to="/button">
          {" "}
          Go to buttons
        </Link>
      </button>
      <button>
        <Link className="link" to="/tooltip">
          {" "}
          Go to tooltips{" "}
        </Link>
      </button>
    </div>
  );
};

export default Home;
