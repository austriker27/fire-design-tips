// Import React
import React from "react";
import { Heading, Slide, Image } from "spectacle";

const picture = require("../../../assets/t-hanks.jpg");

export default (
  <Slide bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      El Fin - thanks!
    </Heading>
    <Image src={picture} />

  </Slide>
);
