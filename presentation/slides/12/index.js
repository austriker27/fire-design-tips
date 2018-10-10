// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const lineLength = require("../../../assets/typography-left-align.png");

export default (
  <Slide bgColor="primary" notes="Centre alignment can work nicely if it’s a small, narrow block of text that’s no more than 3 or 4 lines but like line length, this can make it difficult to track your progress while reading large blocks of text. ">
    <Heading size={6} textColor="secondary" caps >
      Typography Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Large Block Alignment
    </Text>
    <Image src={lineLength} />
    <Link href="http://www.steveschoger.com/2017/07/19/6-tips-that-will-improve-your-ui-typography/" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
