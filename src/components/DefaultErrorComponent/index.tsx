import { useRouteError } from "react-router-dom"
import './styles.css';

const DefaultErrorComponent = () => {
  const error = useRouteError() as any;

  return (
    <div className="container mt-3 mt-lg-4 mt-xl-5 text-center" id="error-container">
      <div className="alert alert-danger" role="alert">
        <h1 className="alert-heading">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <hr />
        <p className="mb-0"> <i>{error.statusText || error.message}</i></p>
      </div>
    </div>
  );
}

export default DefaultErrorComponent;
