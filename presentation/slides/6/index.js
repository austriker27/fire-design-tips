// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const liberalSpacing = require("../../../assets/typography-liberal-spacing.png");

export default (
  <Slide bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Typography Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Use Liberal Spacing
    </Text>
    <Image src={liberalSpacing} height={500} />
    <Link href="http://www.steveschoger.com/2017/07/19/6-tips-that-will-improve-your-ui-typography/" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
