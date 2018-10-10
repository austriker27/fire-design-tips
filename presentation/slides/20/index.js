// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const picture = require("../../../assets/colors-background-sections.jpg");

export default (
  <Slide bgColor="primary" notes="Giving each section on a landing page it's own background color is a really easy way to make things look a bit more interesting.">
    <Heading size={6} textColor="secondary" caps>
      Color Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Sectioned by background color
    </Text>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/928290648104587264" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
