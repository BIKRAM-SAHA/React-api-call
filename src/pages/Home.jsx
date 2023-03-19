import React from "react";
import starEyeEmoji from "../assets/images/emojis/starEyeEmoji.svg";
import victoryEmoji from "../assets/images/emojis/victoryEmoji.svg";

function Home() {
  return (
    <div className="flex flex-col xs:flex-row justify-evenly items-center h-full">
      <div className="flex flex-col justify-center">
        <div className="title text-4xl font-semibold">React API</div>
        <div className="title text-2xl ">Select from the menu to proceed.</div>
      </div>
      <div className="min-w-[50%] h-fit flex justify-center items-center">
        <img src={victoryEmoji} alt="" className="h-[100px] -rotate-45 animate-wiggle"/>
        <img src={starEyeEmoji} alt="" className="h-[200px] animate-[scale_1s_ease-in-out_infinite]"/>
      </div>
    </div>
  );
}

export default Home;
