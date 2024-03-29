import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";

import ItemDetails from "json/itemDetails.json";
import BookingForm from "parts/BookingForm";

export default class DetailPage extends Component {
  componentDidMount() {
    document.title = "Liburanyuk. | Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={ItemDetails}></PageDetailDescription>
            </div>
            <div className="col-5">
              <BookingForm itemDetails={ItemDetails}></BookingForm>
            </div>
          </div>
        </section>
      </>
    );
  }
}
