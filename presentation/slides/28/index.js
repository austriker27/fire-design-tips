// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const picture = require("../../../assets/radio-button-cards.png");

export default (
  <Slide bgColor="primary" notes="Get creative with radio button interfaces — don’t be limited by the typical list-of-options approach. For example, using selectable cards gives you the freedom to present the options in a more exciting way:">
    <Heading size={6} textColor="secondary" caps>
      Radio Buttons UI
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6} italic>
      try cards!
    </Text>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/1024720091546562560" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
