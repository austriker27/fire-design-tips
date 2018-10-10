// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/inactive-icons.jpg");

export default (
  <Slide bgColor="primary" notes="If I am using icons that have more weight than the text, I typically make the icons slightly lighter than the text for inactive states">
    <Heading size={6} textColor="tertiary" italic >
      Inactive icons
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/872865304719892480" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
