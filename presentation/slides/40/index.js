// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/overlap-elements.jpg");

export default (
  <Slide bgColor="primary" notes="Overlapping elements on a page is a great way to create depth and encourage users to scroll">
    <Heading size={6} textColor="tertiary" italic >
      Overlapping Elements
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/892077100705996801" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
