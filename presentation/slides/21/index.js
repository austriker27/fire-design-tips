// Import React
import React from "react";
import { Heading, Slide, Text, Link, Image } from "spectacle";

const picture = require("../../../assets/colors-desat-hero.jpg");

export default (
  <Slide bgColor="primary" notes="Desaturated photo + bold color + blend-mode: multiply. Great for hero banners and creating high contrast for text.">
    <Heading size={6} textColor="secondary" caps >
      Color Tips
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={6}>
      Hero Image - Blend Mode
    </Text>
    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/888021897782362114" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
