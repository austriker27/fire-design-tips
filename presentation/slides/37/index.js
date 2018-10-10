// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/remove-borders.jpg");

export default (
  <Slide bgColor="primary" notes="Too many borders can make a design look really busy. Here's a few ideas that are a bit more subtle:">
    <Heading size={6} textColor="tertiary" italic >
      Bye Bye Borders
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/i/moments/994601867987619840" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
