import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink(props) {
  return (
    <a
      href={props.Link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#e8eaea] hover:scale-125 transition duration-150 ease-out hover:ease-in"
    >
      <FontAwesomeIcon
        icon={props.Icon}
        size="lg"
        // style={{ color: "white" }}
      ></FontAwesomeIcon>
    </a>
  );
}
