// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const picture = require("../../../assets/colors-desat-hero.jpg");

export default (
  <Slide bgColor="primary" notes="notes">
    <Heading size={6} textColor="secondary" caps >
      Color Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      subtitle
    </Text>
    <Image src={picture} />
    <Link href="https://google.com" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
