// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/stripe-loading-svg.jpg");

export default (
  <Slide bgColor="primary" notes="Fun fact about https://stripe.com/environment  : while the hero image is loading, the header displays an inline SVG illustration blurred with a CSS filter ᕕ( ᐛ )ᕗ">
    <Heading size={6} textColor="tertiary" italic >
      SVG Background
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/bdc/status/965880151690096651" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
