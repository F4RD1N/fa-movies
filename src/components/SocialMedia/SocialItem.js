import React from "react";
export function SocialItem({ img, link }) {
  return (
    <li className=" bg-secondary hover:bg-gray-500 active:bg-gray-600 transition-all select-none flex justify-center items-center w-14 h-14 rounded-full my-2">
      <a href={link} target="_blank"><img className="invert" width={35} src={img} /></a>
    </li>
  );
}
