import React from "react";
import img1 from "../Images/img_1.webp";
import img2 from "../Images/img_2.webp";
import img3 from "../Images/img_3 (1).webp";
// import img4 from '../Images/img_4(1).webp';
import { API_URL } from "./config/index";
import './Main.css'

const Main = () => {
  return (
    <>
    <div className="row about-buy d-none d-md-flex">
        <div className="col-6">
            <span>Price <b>$299.00</b></span>
            <span className="count">1</span>
            <form
              className="button"
              action={`${API_URL}/api/stripe/create-checkout-session`}
              method="POST"
            >
            <button className="buy-btn">Buy Now</button>
            </form>
        </div>
        <div className="col-6 about-txt">About Product</div>
    </div>
      <div className="row mt-5 m-0">
        <div className="col-md-6">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" interval={1500}>
                <img src={img1} class="d-block" width={250} height={300} alt="..." />
              </div>
              <div class="carousel-item" interval={1500}>
                <img src={img2} class="d-block" width={250} height={300} alt="..." />
              </div>
              <div class="carousel-item" interval={1500}>
                <img src={img3} class="d-block" width={250} height={300} alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-6 content">
          <div className="Product-Details">
            <h6 className="heading-product-details">APPLE PRODUCTS</h6>
            <div className="about-txt d-block d-md-none">About Product</div>
            <h2 className="Product-Name mt-4">New Apple AirPods (3rd Generation)</h2>
            <p className="product-para">It's magic remastered</p>
          </div>
          <div>
            <ul type="Disc" className="Product-features">
              <div>
                <li>
                  Spatial audio with dynamic head tracking palces sound all
                  around you
                </li>
              </div>
              <li>Adaptive EQ automatically tunes music to your ears</li>
              <li>All-new coutoured design</li>
              <li>
                Force sensor lets you esaily control you enterainment,answer or
                end calls,and more
              </li>
              <li>Sweat and water resistant</li>
              <li>Up to 6 hours of listening time with one charge</li>
              <li>
                Up to 30 hours of total listening time with the MagSafe charging
                Case
              </li>
              <li>Quick access to Siri by saying "Hey Siri"</li>
              <li>
                Effortless setup,in-ear detection and automatic switching for a
                magical experience
              </li>
              <li>
                Easily share audio between two sets of Airpods on your
                iphone,ipad,ipad touch or Apple TV
              </li>
            </ul>
            <p>SKU D5515AI</p>
          </div>
        </div>
      </div>
      <div className="mobile-footer d-block d-md-none">
            <span>Price <b>$299.00</b></span>
            <span className="count">1</span>
            
            <button className="buy-btn">Buy Now</button>
        </div>
    </>
  );
};

export default Main;
