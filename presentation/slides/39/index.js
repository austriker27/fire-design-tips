// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/icons-instead-of-buttons.jpg");

export default (
  <Slide bgColor="primary" notes="Using a generic icon like an arrow or a checkmark instead of the standard bullet is a great way to add visual interest to unordered lists.">
    <Heading size={6} textColor="secondary" caps >
      Replace standard bullets
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/872478203016826880" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
