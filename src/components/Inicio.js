import React from "react";
import img_banner_1 from "../images/img_banner_1.jpg";
import img_banner_2 from "../images/img_banner_2.jpg";
import img_banner_3 from "../images/img_banner_3.jpg";

const Inicio = () => {
  return (
    <div>
      <h1>GuitarShopp MariSabel</h1>
      <h2>La mejor Page de Guitarras </h2>
      <div className="container" style={{ marginTop: 20, marginBottom: 20 }}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img_banner_1}
                className="d-block w-100"
                alt="No Encontrada"
              />
            </div>
            <div className="carousel-item">
              <img
                src={img_banner_2}
                className="d-block w-100"
                alt="No Encontrada"
              />
            </div>
            <div className="carousel-item">
              <img
                src={img_banner_3}
                className="d-block w-100"
                alt="No Encontrada"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <center>
        <div>
          <div className="container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Uxp39syhr-8"
              title="YouTube video player"
              // frameorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
              className="d-block w-100"
            ></iframe>
            <div className="container"></div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Inicio;
