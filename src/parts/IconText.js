import React from "react";
import Button from "elements/Button";
import "assets/scss/style.scss";

export default function IconText() {
  return (
    <Button className="brand-text-icon" href="/" type="link">
      Liburan<span className="text">yuk.</span>
    </Button>
  );
}
