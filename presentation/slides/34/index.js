// Import React
import React from "react";
import { Layout, Appear, Text, Fill, Heading, Slide, Link, Image } from "spectacle";

const images = {
  digitalocean: require("../../../assets/dropdown-digitalocean.png"),
  stripe: require("../../../assets/dropdown-stripe.png"),
  messageBird: require("../../../assets/dropdown-messagebird.png"),
  baremetrics: require("../../../assets/dropdown-baremetrics.png")
};

export default (
  <Slide bgColor="primary" notes="">
    <Heading size={6} textColor="secondary" caps>
      Real world drop downs
    </Heading>

    <Layout>
      <Appear>
        <Fill>
          <Text
            href=""
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            fit
            bold
          >
            Digital Ocean
          </Text>
          <Image src={images.digitalocean} padding="0px 10px" />
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Text
            href=""
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            fit
            bold
          >
            Stripe
          </Text>
          <Image src={images.stripe} padding="0px 10px" />
        </Fill>
      </Appear>
    </Layout>
    <Layout>
      <Appear>
        <Fill>
          <Text
            href=""
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            fit
            bold
          >
            Message Bird
          </Text>
          <Image src={images.messageBird} padding="0px 10px" />
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Text
            href=""
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            fit
            bold
          >
            Baremetrics
          </Text>
          <Image src={images.baremetrics} padding="0px 10px" />
        </Fill>
      </Appear>
    </Layout>
    <Link
      href="https://twitter.com/steveschoger/status/953297226985549825"
      size={6}
      textColor="quaternary"
    >
      Source
    </Link>
  </Slide>
);
