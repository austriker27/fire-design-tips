// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const picture = require("../../../assets/styling-box-shadow.jpg");

export default (
  <Slide bgColor="primary" notes="Giving your box shadows a slight, vertical offset helps to make them look more natural.">
    <Heading size={6} textColor="secondary" caps >
      Box Shadow
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      natural offset
    </Text>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/877209916179709955" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
