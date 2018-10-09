// Import React
import React from "react";
import { Heading, Image, Slide } from "spectacle";

const images = {
  steveTwitter: require("../../../assets/ss-twitter-mobile.png")
};

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Image src={images.steveTwitter} />
    <Heading margin="10px 0 0" textColor="secondary" size={1} fit bold>
      Golf clap for Steve and his design tips
    </Heading>

  </Slide>
);
