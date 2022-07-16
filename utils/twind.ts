import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      "babyblue": "#93C5FD",
      "raisinblack": "#272932",
      "khakiweb": "#AFA98D",
      "carnelian": "#B3001B",
      "orangered": "#F26419",
      "white": "#FFFFFF"
    }
  }
};
if (IS_BROWSER) setup(config);
