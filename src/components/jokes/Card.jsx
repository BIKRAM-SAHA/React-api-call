import React from "react";
import chuckNorris from "../../assets/images/bg/bg2.png";

function Card() {
  const joke = {
    categories: ["funny", "gummy"],
    created_at: "2020-01-05 13:42:29.855523",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "XzqcWnrYQbu4JggkIj-WZQ",
    updated_at: "2020-01-05 13:42:29.855523",
    url: "https://api.chucknorris.io/jokes/XzqcWnrYQbu4JggkIj-WZQ",
    value: "Chuck Norris can bend irony into balloon-animal shapes.",
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-auto">
      <figure>
        <img src={chuckNorris} alt="chuckNorris" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Chuck Norris</h2>
        <p>{joke.value}</p>
        <div className="card-actions justify-end min-h-{20}">
        {joke.categories.map((item) => {
            return (
              <div className="badge badge-primary" key={item}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
