import axios from "axios";

export interface performRequestProps {
  url: string;
  options?: {
    header?: {
      "Content-Type"?: string;
      Accept?: string;
    };
    method: string;
    payload?: {
      [key: string]: string | number | Array<string | number> | null;
    };
  };
}

export default {
  performRequest({ url, options }: performRequestProps) {
    const token = localStorage.getItem("token");

    let headers: { [key: string]: string } | {};

    const method =
      options && Object.keys(options).includes("methods")
        ? options.method
        : "GET";

    headers = options?.header != null || {};

    if (token) {
      headers = {
        ...headers,
        Authorization: token,
      };
    }

    return () =>
      axios(url, {
        headers,
        method,
      });
  },
};
