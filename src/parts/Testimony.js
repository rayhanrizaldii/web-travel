import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <div className="frame-testimony" />
            </div>
          </div>
          <div className="testimonial-text col">
            <h4>{data.name}</h4>
            <Star
              value={data.rate}
              width={40}
              height={40}
              spacing={4}
            ></Star>
            <h5 className="h2">{data.content}</h5>
            <span className="span-testimonial">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                {" "}
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
