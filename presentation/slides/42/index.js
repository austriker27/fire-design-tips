// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/create-a-dot-map.jpg");

export default (
  <Slide bgColor="primary" notes="How to make a stylish map with no graphic design skills - good for companies contact pages">
    <Heading size={6} textColor="secondary" caps >
      Create A Dot Map
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/882949496388321284" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
