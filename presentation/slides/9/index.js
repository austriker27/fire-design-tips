// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const fullBlack = require("../../../assets/typography-full-black.png");

export default (
  <Slide bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Typography Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Full Black
    </Text>
    <Image src={fullBlack}/>
    <Link href="http://www.steveschoger.com/2017/07/19/6-tips-that-will-improve-your-ui-typography/" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
