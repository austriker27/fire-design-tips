// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/overlapping-images.jpg");

export default (
  <Slide bgColor="primary" notes="Overlapping images is a great way to add depth to an interface and make it look more “designed”. Use a border that matches the background color to create distinction and keep things looking clean">
    <Heading size={6} textColor="tertiary" italic >
      Add Depth
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/981606881255976961" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
