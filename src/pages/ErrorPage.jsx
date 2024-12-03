import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-page">
    <h1>Oops!! you are in the wrong page</h1>
    <Link to={"/"}>
      <Button color="blue" appearance="primary">
          Home Page
      </Button>
    </Link>
  </div>
  )
}

export default ErrorPage