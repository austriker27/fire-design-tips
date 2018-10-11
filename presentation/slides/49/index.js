// Import React
import React from "react";
import { Heading, Slide, Image, Text } from "spectacle";

const picture = require("../../../assets/t-hanks.jpg");

export default (
  <Slide bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      El Fin!
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6} italic>
      (aka time to wake up)
    </Text>
    <Image src={picture} />
  </Slide>
);
