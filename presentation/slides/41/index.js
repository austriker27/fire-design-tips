// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/color-modal-top.jpg");

export default (
  <Slide bgColor="primary" notes="This trick also works great on modals and, in some cases, panels. Using a 2 color gradient also adds a nice touch ">
    <Heading size={6} textColor="tertiary" italic >
      Adding color to modals
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/872128037151805441" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
