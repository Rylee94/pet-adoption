// TODO: Update to match application data.
// TODO: Confirm fields below are all we need, match across app, etc...
// TODO: Style - for 'return' section, confirm what we want to use for styling...

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}