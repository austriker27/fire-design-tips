// Import React
import React from "react";
import { Link, Fill, Layout, Appear, Image, Slide } from "spectacle";

const images = {
  heroicons: require("../../../assets/heroicons.png"),
  heropatterns: require("../../../assets/heropatterns.png"),
  refactoringui: require("../../../assets/refactoringui.png"),
  zondicons: require("../../../assets/zondicons.png")
};

export default (
  <Slide
    bgColor="primary"
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
        <Fill>
          <Link href="" margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Hero Patterns
          </Link>
          <Image src={images.heropatterns} padding="0px 10px" />
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Link href="" margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Heroicons
          </Link>
          <Image src={images.heroicons} padding="0px 10px" />
        </Fill>
      </Appear>
    </Layout>
    <Layout>
      <Appear>
        <Fill>
          <Link href="" margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Zondicons
          </Link>
          <Image src={images.zondicons} padding="0px 10px" />
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Link href="" margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Refactoring UI, a website & WIP book
          </Link>
          <Image src={images.refactoringui} padding="0px 10px" />
        </Fill>
      </Appear>

    </Layout>
  </Slide>
);
