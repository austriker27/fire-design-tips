// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const differentLineHeights = require("../../../assets/typography-different-line-heights.png");

export default (
  <Slide bgColor="primary" notes="Using the same line-height for all text is a very subtle but common mistake. 1.5 may work great for body copy, but as text gets larger, your line-height should get tighter.">
    <Heading size={6} textColor="secondary" caps >
      Typography Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Line Heights
    </Text>
    <Image src={differentLineHeights} />
    <Link href="https://twitter.com/steveschoger/status/968519052800024577" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
