import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import iconTravelers from "assets/images/icons/icon-travelers.svg";
import iconCities from "assets/images/icons/icon-cities.svg";
import iconTreasures from "assets/images/icons/icon-treasures.svg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
  function showwMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="hero container pt-4">
        <div className="row align-items-center">
          <div className="col-auto py-5" style={{ width: 530 }}>
            <h1
              className="mb-3"
              style={{ fontWeight: "bold", lineHeight: "63px" }}
            >
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 w-75"
              style={{
                fontWeight: "normal",
                color: "#adb5bd",
                lineHeight: "170%",
              }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showwMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="75"
                  height="75"
                  src={iconTravelers}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span style={{ fontWeight: "normal", color: "#adb5bd" }}>
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="75"
                  height="75"
                  src={iconTreasures}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span style={{ fontWeight: "normal", color: "#adb5bd" }}>
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="75"
                  height="75"
                  src={iconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span style={{ fontWeight: "normal", color: "#adb5bd" }}>
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="image-hero position-relative">
              <img
                src={ImageHero}
                alt="Villa with Great View"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <div className="frame" />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
