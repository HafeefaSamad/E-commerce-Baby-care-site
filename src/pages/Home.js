import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
              <span className="shadow-lg p-3 text-black">Trade-in Offer!!</span>
              <h1>Super Value Deals</h1>
              <h2>On All Products</h2>
              <p>Save More with Little-me</p>
              <Link to={'/shop'} className="button-link bg-primary">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
