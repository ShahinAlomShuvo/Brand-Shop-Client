import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='flex justify-center items-center h-screen text-center font-bold '>
      <div className='space-y-2' id='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>404 {error.statusText || error.message}</i>
        </p>
        <div>
          <Link className='btn' to={"/"}>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
