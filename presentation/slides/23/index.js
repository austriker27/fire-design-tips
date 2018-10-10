// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const picture = require("../../../assets/input-style-search-options.jpg");

export default (
  <Slide bgColor="primary" notes="notes">
    <Heading size={6} textColor="secondary" caps>
      Spicing up your UI
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Search Inputs
    </Text>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/920706913624625152" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
