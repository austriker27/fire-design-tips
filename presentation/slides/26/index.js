// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/table-design-more-interesting.png");

export default (
  <Slide bgColor="primary" notes="Get creative with table design — table cells can contain more than simple unstyled text. Here are a few ways to make tables look more interesting:">
    <Heading size={6} textColor="secondary" caps >
      Table Design
    </Heading>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/1030141801158594560" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
