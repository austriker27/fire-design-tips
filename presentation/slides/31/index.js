// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/card-design-tips.png");

export default (
  <Slide bgColor="primary" notes="notes">
    <Heading size={6} textColor="secondary" caps >
      Random polishing tips
    </Heading>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/994234772502339586" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
