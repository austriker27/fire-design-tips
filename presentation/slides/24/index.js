// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const picture = require("../../../assets/styling-font-color-weight.jpg");

export default (
  <Slide bgColor="primary" notes="notes">
    <Heading size={6} textColor="secondary" caps >
      Emphasize / De-emphasize Text
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      via colors and font weight
    </Text>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/910162010754748416" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
