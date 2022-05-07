import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { data } from "../Book";
import Discount from "./Assets/discount.svg";
import Star from './Assets/star.png'
export function LandingPage() {
  const [foodItems, setfoodItems] = useState([]);
  useEffect(() => {
    setfoodItems(data);
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-success" >
        <div class="container-fluid">
          <a class="navbar-brand">
            Books
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  {" "}
                  <a class="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/mystery" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page">
                    Mystery
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/mythology" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page">
                    Mythology
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/technology" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page">
                    Technology
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/history" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page">
                    History
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container_card">
        {foodItems.map((food_data) => (
          <>
            <div
              className="food_card"
              key={food_data.id}
              onMouseLeave={() =>
                localStorage.setItem(
                  "foodId",
                  JSON.stringify(foodItems[+food_data.id])
                )
              }
              
            >
              {food_data.promoted && (
                <div className="promoted" id="is_promote">
                  PROMOTED
                </div>
              )}
              <img
                src={food_data.img_url}
                alt="Food_Image"
                className="food_image"
              ></img>
              <h4 className="Header_card">{food_data.name}</h4>
              <p className="para_card">{food_data.cuisines.join(",")}</p>
              <div className="food_details">
                <div
                  className="rating"
                  style={{
                    backgroundColor:
                      food_data.rating < 4 ? "#db7c38" : "#48c479",
                  }}
                >
                  <img src={Star} alt="" className="star_img"/>&nbsp;{food_data.rating}
                </div>
                <div className="average_time">
                  {food_data.average_time}&nbsp;MINS
                </div>
                <div className="average_price">
                  &#8377;{food_data.average_cost} FOR TWO
                </div>
              </div>
              <div className="footer">
                <img src={Discount} alt="" className="discount_icon" />
                50% off | use TRYNEW
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
