// Import React
import React from "react";
import { Layout, Heading, Slide, Text, Link, Image } from "spectacle";

const eyebrow1 = require("../../../assets/typography-eyebrows-1.jpg");
const eyebrow2 = require("../../../assets/typography-eyebrows-2.jpg");


export default (
  <Slide bgColor="primary" notes="they are called running head or runners in print parlance.">
    <Heading size={6} textColor="secondary" caps >
      Typography Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      "Eyebrows in the wild"
    </Text>
    <Layout>
      <Image src={eyebrow1} margin="0 10px"/>
      <Image src={eyebrow2} margin="0 10px"/>
    </Layout>
    <Link href="https://twitter.com/steveschoger/status/956229542288543744" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
