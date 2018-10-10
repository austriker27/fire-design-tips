// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/button-background.png");

export default (
  <Slide bgColor="primary" notes="If you're tired of using outline styles for secondary buttons, a soft solid background based on the text color can be a great alternative.">
    <Heading size={6} textColor="tertiary" italic >
      Button Backgrounds
    </Heading>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/1012011421956300801" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
