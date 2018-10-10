// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

const picture = require("../../../assets/think-outside-db.png");

export default (
  <Slide bgColor="primary" notes="Don't be afraid to think outside the database — your UI doesn't need to map one-to-one with your data's fields and values. Here are a few ideas you can use to present field: value data in a more interesting way:">
    <Heading size={6} textColor="tertiary" italic >
      Presenting Data
    </Heading>

    <Image src={picture} />
    <Link href="https://twitter.com/steveschoger/status/997125312411570176" size={6} textColor="quaternary"> Source
    </Link>
  </Slide>
);
