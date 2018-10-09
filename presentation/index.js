// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#25263D",
    secondary: "#FFFFFF",
    tertiary: "#fef492",
    quaternary: "#6FC8DA"
  },
  {
    primary: "NoeDisplay",
    secondary: "Aktiv Grotesk"
  }
);

const slidesImports = [
  import("./slides/1"),
  import("./slides/2"),
  import("./slides/3"),
  import("./slides/4"),
  import("./slides/5"),
  import("./slides/6"),
  import("./slides/7"),
  import("./slides/8"),
  import("./slides/9")
];

// maybe use this one if noe display doesnt work: https://fonts.google.com/specimen/Abril+Fatface

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsRsolved) => {
      slidesImportsRsolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, { key: index });
          })
        }
      </Deck>
    );
  }
}
