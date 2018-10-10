// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/body-background-color.png");

export default (
  <Slide bgColor="primary" notes="For a little extra polish, add a background color to your <body> and different background color on your content wrapper to reveal a surprise splash of color when over-scroll happens. ">
    <Heading size={6} textColor="tertiary" italic >
      Background Body Color
    </Heading>
    <Image src={picture} />
    <Link href="https://twitter.com/derrickreimer/status/1002609328652632064" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
