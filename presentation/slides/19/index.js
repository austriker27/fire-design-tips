// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const picture = require("../../../assets/colors-images-desat.jpg");

export default (
  <Slide bgColor="primary" notes="Working with images that clash with each other? Try desaturating them to greyscale or colorizing them all with a single color to make them a little more cohesive.">
    <Heading size={6} textColor="secondary" caps >
      Color Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Clashing Images
    </Text>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/950764423643320320" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
