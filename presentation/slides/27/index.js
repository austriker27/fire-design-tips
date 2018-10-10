// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/table-design-2.jpg");

export default (
  <Slide bgColor="primary" notes="notes">
    <Heading size={6} textColor="tertiary" italic >
      Table Design Pt 2
    </Heading>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/913062604540653568" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
