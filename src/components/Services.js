import "./ServicesStyles.css";
import React from 'react'
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
    <h2>Services</h2>
      <div className="card-container">
        <div className="card">
          <h3>Frontend Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi
            optio itaque unde atque accusamus impedit distinctio, libero eum ea
            temporibus neque nesciunt eveniet nulla tempora odit iste,
            voluptatum repellat.
          </p>
          <Link to="/about" class="btn">
            Read More
          </Link>
        </div>
        <div className="card">
          <h3>Backend Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi
            optio itaque unde atque accusamus impedit distinctio, libero eum ea
            temporibus neque nesciunt eveniet nulla tempora odit iste,
            voluptatum repellat.
          </p>
          <Link to="/about" class="btn">
            Read More
          </Link>
        </div>
        <div className="card">
          <h3>Cloud Computing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi
            optio itaque unde atque accusamus impedit distinctio, libero eum ea
            temporibus neque nesciunt eveniet nulla tempora odit iste,
            voluptatum repellat.
          </p>
          <Link to="/about" class="btn">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services