// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/checkout-page-redesign.jpg");

export default (
  <Slide bgColor="primary" notes="">
    <Heading size={6} textColor="tertiary" italic >
      Checkout page redesign
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/953640952731750400" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
