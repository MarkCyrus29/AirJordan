import React from "react";

const Links = ({ title }) => {
  return (
    <>
      <a href={title} className="cursor-pointer">
        {title}
      </a>
    </>
  );
};

export default Links;
