// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const differentTextSizes = require("../../../assets/typography-title-caps.jpg");

export default (
  <Slide bgColor="primary" notes="This “eyebrow” title treatment is not only great for clarifying your message, but it also makes a boring headline + body pattern look more interesting.">
    <Heading size={6} textColor="secondary" caps>
      Typography Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Eyebrow titles
    </Text>
    <Image src={differentTextSizes} />
    <Link href="https://twitter.com/steveschoger/status/956229542288543744" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
