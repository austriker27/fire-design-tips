// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const picture = require("../../../assets/colors-colored-text-button.png");

export default (
  <Slide bgColor="primary" notes=" Achieving an accessible contrast ratio is very difficult when using white text on a colored background. Using dark colored text on a soft colored background is much easier to make accessible, and usually looks better to boot">
    <Heading size={6} textColor="secondary" caps >
      Color Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Button Colors
    </Text>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/1045371124274483200" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
