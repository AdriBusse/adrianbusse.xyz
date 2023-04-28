import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  text: string;
  icon: IconProp;
  link: string;
}
function IconLink(props: Props) {
  const { text, icon, link } = props;
  return (
    <Link className="hover:underline" href={link} target="_blank">
      <FontAwesomeIcon icon={icon} style={{ fontSize: "1rem" }} /> {text}
    </Link>
  );
}

export default IconLink;
