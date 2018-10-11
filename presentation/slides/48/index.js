// Import React
import React from "react";
import { Layout, Appear, Fill, Link, Heading, Slide, Image } from "spectacle";


const images = {
  stripe: require("../../../assets/stripe.png"),
  digitalocean: require("../../../assets/digitalocean.png")
};

export default (
  <Slide bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Favorite Websites
    </Heading>
    <Layout>
      <Appear>
        <Fill>
          <Link
            href=""
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            fit
            bold
          >
            Digital Ocean
          </Link>
          <Image src={images.digitalocean} padding="0px 10px" />
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Link
            href=""
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            fit
            bold
          >
            Stripe
          </Link>
          <Image src={images.stripe} padding="0px 10px" />
        </Fill>
      </Appear>
    </Layout>
  </Slide>
);
