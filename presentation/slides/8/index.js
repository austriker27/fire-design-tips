// Import React
import React from "react";
import { Layout, Fill, Heading, Slide, Text, Link, Image } from "spectacle";

const colorsContrast = require("../../../assets/typography-colors-contrast.png");
const facebookBlack = require("../../../assets/typography-full-black-facebook.png");


export default (
  <Slide bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Typography Tips
    </Heading>
    <Layout >
      <Fill >
        <Text margin="10px 0 0" textColor="tertiary" size={6} padding="0px 10px">
        Color & Contrast for hierarchy
        </Text>

        <Image src={colorsContrast} padding="0px 10px"/>


      </Fill>
      <Fill>
        <Text margin="10px 0 0" textColor="tertiary" size={6} padding="0px 10px">
        Facebook & their black
        </Text>


        <Image src={facebookBlack} padding="0px 10px"/>


      </Fill>

    </Layout>
    <Link href="http://www.steveschoger.com/2017/07/19/6-tips-that-will-improve-your-ui-typography/" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
