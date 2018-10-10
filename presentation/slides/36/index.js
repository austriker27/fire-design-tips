// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/icons-background-colored.jpg");

export default (
  <Slide bgColor="primary" notes="Instead of blowing up small, in-app icons for your landing page, try putting a shape behind them and giving them a background color.">
    <Heading size={6} textColor="tertiary" italic >
      Icons - with multiple backgrounds!
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/931198630333165568" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
