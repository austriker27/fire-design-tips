// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/selection-background-framer.png");

export default (
  <Slide bgColor="primary" notes="I always appreciate when a site styles the selection background and text color. I think it really shows that whoever developed it cares about the details - from @framer,">
    <Heading size={6} textColor="secondary" caps >
      Selection Background & Text Color
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/954034197852819457" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
