import { useContext, useEffect, useState } from "react";
import { LoaderContext } from "../../contexts/LoaderContextProvider";
import axios from "axios";
import chuckNorris from "../../assets/images/bg/bg2.png";
import JokeLoader from "../commons/JokeLoader";

function Card() {
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  const [joke, setJoke] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_JOKES_API}/random`).then((response) => {
      console.log(response.data);
      setJoke(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-auto">
      <figure>
        <img src={chuckNorris} alt="chuckNorris" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Chuck Norris</h2>
        {isLoading ? (
          <JokeLoader />
        ) : (
          <>
            <p>{joke?.value}</p>
            <div className="card-actions justify-end min-h-{20}">
              {joke.categories?.map((item) => {
                return (
                  <div className="badge badge-primary" key={item}>
                    {item}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
