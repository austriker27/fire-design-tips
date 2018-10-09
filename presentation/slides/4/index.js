// Import React
import React from "react";
import { Fit, Layout, Appear, Image, Slide } from "spectacle";

const images = {
  steveTwitter: require("../../../assets/ss-twitter-mobile.png")
};

export default (
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="secondary"
    align="flex-center"
  >
    {/* <List>
      <ListItem>
        Hero Patterns
        <Image src={images.steveTwitter} />
      </ListItem>
      <ListItem>Heroicons</ListItem>
      <ListItem>Zondicons</ListItem>
      <ListItem>Item 4</ListItem>
    </List> */}
    <Layout>
      <Appear>
        <Fit>
          <Image src={images.steveTwitter} />
        </Fit>
      </Appear>
      <Appear>
        <Fit>
          <Image src={images.steveTwitter} />
        </Fit>
      </Appear>
      <Appear>
        <Fit>
          <Image src={images.steveTwitter} />
        </Fit>
      </Appear>
      <Appear>
        <Fit>
          <Image src={images.steveTwitter} />
        </Fit>
      </Appear>
    </Layout>
  </Slide>
);
