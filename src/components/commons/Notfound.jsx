import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="card sm:w-96 bg-gray-600 items-center text-center">
        <div className="card-body">
          <p className="text-3xl card-title font-bold">Oops!!</p>
          <p className="text-xl">page not found</p>
          <Link to="/" className="card-actions">
            <div className="btn btn-success">Back Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
