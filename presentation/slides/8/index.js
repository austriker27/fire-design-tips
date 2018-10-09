// Import React
import React from "react";
import { Heading, Slide, Text, Link } from "spectacle";

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Typography Tips
    </Heading>
    <Text margin="10px 0 0" textColor="secondary" size={6}>
      padding on everything
    </Text>
    <Link href="http://www.steveschoger.com/2017/07/19/6-tips-that-will-improve-your-ui-typography/" size={6}> Source
    </Link>
  </Slide>
);
