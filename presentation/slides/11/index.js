// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const lineLength = require("../../../assets/typography-line-length.png");

export default (
  <Slide bgColor="primary" notes="There are a few common rules used to measure line length. If you’re working with a large block of left aligned text, the general rule of thumb is between 45 and 90 characters per line. Keeping your line length more narrow than wide is ideal, but the point size of the font plays an important role in determining the optimal length. ">
    <Heading size={6} textColor="secondary" caps >
      Typography Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Line Length
    </Text>
    <Image src={lineLength} />
    <Link href="http://www.steveschoger.com/2017/07/19/6-tips-that-will-improve-your-ui-typography/" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
