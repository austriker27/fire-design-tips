// Import React
import React from "react";
import { Appear, List, ListItem, Heading, Slide } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Top Takeaways
    </Heading>
    <List>
      <Appear>
        <ListItem margin="10px 0 0" textColor="tertiary" size={6}>
          More Room To Breathe
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0 0" textColor="tertiary" size={6}>
          More Room To Breathe
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0 0" textColor="tertiary" size={6}>
          More Room To Breathe
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0 0" textColor="tertiary" size={6}>
          More Room To Breathe
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
