import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
    <h1>Oops!! you are in the wrong page</h1>
    <div class="bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] h-[600px] w-[800px] bg-no-repeat">

    </div>
        <Link to={"/"} >
      <div className="border p-4 hover:bg-green-900 bg-green-800 text-white">
            
            Home Page
        
      </div>
    </Link>
  </div>
  )
}

export default ErrorPage