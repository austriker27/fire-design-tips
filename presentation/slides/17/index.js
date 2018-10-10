// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const differentTextSizes = require("../../../assets/colors-saturate-colors.png");

export default (
  <Slide bgColor="primary" notes="Try saturating your greys with a bit of blue or brown for a cooler or warmer feel.">
    <Heading size={6} textColor="secondary" caps >
      Color Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Saturate your grays (greys)
    </Text>
    <Image src={differentTextSizes} />
    <Link href="https://twitter.com/steveschoger/status/975796307196604417" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
