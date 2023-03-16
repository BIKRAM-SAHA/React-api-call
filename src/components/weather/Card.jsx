import { useState, useEffect } from "react";
import bgimg from "../../assets/images/bg/bg1.jpg";

function Card() {
  const [location, setLocation] = useState("");
  const temp = "_";

  useEffect(() => {
    console.log("make api call");

  }, []);

  return (
    <div className="card sm:w-96 bg-base-100 shadow-xl image-full m-auto">
      <figure>
        <img src={bgimg} alt="background" />
      </figure>
      <div className="card-body m-auto text-center">
        <h2 className="card-title justify-center text-2xl">Weather</h2>
        <p className="text-4xl">{temp}°C</p>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter City</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-black"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <button className="btn btn-primary my-2">Search 🔎</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
