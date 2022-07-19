import { SocialItem } from "./SocialItem";
import React, { useState } from "react";

const SocialMedia = () => {
  const [toggle, setToggle] = useState(false);

  const openBoxHandler = () => {
    setToggle((current) => !current);
  };
  const img =
    "https://icon-library.com/images/chat-bubble-icon-png/chat-bubble-icon-png-14.jpg";
  const instagram = 'https://freeiconshop.com/wp-content/uploads/edd/instagram-new-outline.png'
  const telegram = 'https://cryptosailors.tech/pictures/telegram_logo.png'
  const github = 'https://cdn.iconscout.com/icon/free/png-256/github-163-761603.png'
  return (
    <div className="fixed bottom-0 socialAnimate">
      <div
        className=" bg-blue-400 hover:bg-blue-500 active:bg-blue-600 transition-all select-none flex justify-center items-center w-14 h-14 rounded-full m-4"
        onClick={openBoxHandler}
      >
        <img className="invert" width={40} src={img} />
      </div>
      {toggle && (
        <ul className="absolute bottom-20 socialAnimate ml-5">
          <SocialItem img={instagram} link="https://ig.me/react.nick" />
          <SocialItem img={telegram} link="https://t.me/HiddenID" />
          <SocialItem img={github} link="https://github.com/F4RD1N" />
        </ul>
      )}
    </div>
  );
};

export default SocialMedia;
