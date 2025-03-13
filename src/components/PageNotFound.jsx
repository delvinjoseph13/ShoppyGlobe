import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function PageNotFound(){
    const err=useRouteError()
    console.log(err)
    return (
        <div className="h-screen flex justify-center items-center">
              <div>
                <h1 className="text-center text-3xl mb-4">
                    Sorry this page isn't available ☹️
                </h1>
                <p className="text-xl font-medium">This link you followed may be borken,or the page may have been removed <Link to="/" className="text-blue-300 underline">GO back to Home</Link></p>
              </div>
        </div>
    )
}

export default PageNotFound;