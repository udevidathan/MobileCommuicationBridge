import { HTTP } from "./types";

import { performRequestProps } from ".";

const baseURL = "https://fakestoreapi.com";

export default {
  getTodo(): performRequestProps {
    return {
      url: `${baseURL}/products`,
      options: {
        method: HTTP.GET,
      },
    };
  },
};
