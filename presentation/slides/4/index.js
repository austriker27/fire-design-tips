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
    transition={["fade"]}
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
          <Image src={images.heropatterns} />
          <Link href="" margin="10px 0 0" textColor="secondary" size={1} fit bold>
            HeroPatterns
          </Link>
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Image src={images.heroicons} />
          <Link href="" margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Heroicons
          </Link>
        </Fill>
      </Appear>
    </Layout>
    <Layout>
      <Appear>
        <Fill>
          <Image src={images.zondicons} />
          <Link href="" margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Zondicons
          </Link>
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Image src={images.refactoringui} />
          <Link href="" margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Refactoring UI, a website & book
          </Link>
        </Fill>
      </Appear>

    </Layout>
  </Slide>
);
