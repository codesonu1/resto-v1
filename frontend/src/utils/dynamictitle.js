import React, { useEffect } from "react";

const Dynamictitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

export default Dynamictitle;
