import { AxiosError } from "axios";
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = (): React.ReactElement => {
  const error = useRouteError();

  let message;

  if (error instanceof AxiosError && error.status === 404) {
    message = <p>Page Not found</p>;
  } else if (error instanceof AxiosError && error.status === 500) {
    message = <p>There was a problem fetching the data for this page.</p>;
  } else {
    message = <p>An unexpected error occurred.</p>;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
