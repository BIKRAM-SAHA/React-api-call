import React from "react";

function About() {
  return (
    <div className="h-full p-8 flex flex-col">
      <div className="text-3xl py-3">About</div>
      <p className="text-xl flex-1">
        Made this site to implement the concept of fetching from apis using
        axios. A simple site which uses Chuck-Norris-Api and Weather-Api. Hope
        it helps! (somehow :p)
      </p>
      <p>
        Credits:
        <ul>
          <li>
            <a
              href="https://www.freepik.com/free-vector/elegant-cloud-background-blue-sky-design_8562853.htm#query=weather&position=15&from_view=search&track=sph"
              className=" text-blue-500"
            >
              Image by starline
            </a>{" "}
            on Freepik
          </li>
          <li>
            <a href="https://uiverse.io/Cornerstone-04/little-mouse-69">
              loader 1
            </a>
          </li>
          <li>
            <a href="https://uiverse.io/youranonone10/young-otter-44">
              loader 2
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default About;
