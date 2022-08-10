import React, { useEffect, useState } from "react";
import { EDUCATION, SKILLS, INTERNSHIP } from "../src/data";

const Table = () => {
  const [selected, setSelected] = useState("education");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "EDUCATION",
      title: "Education",
    },
    {
      id: "SKILLS",
      title: "SKILLS",
    },
    {
      id: "INTERNSHIP",
      title: "INTERNSHIP",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "EDUCATION":
        setData(EDUCATION);
        break;
      case "SKILLS":
        setData(SKILLS);
        break;
      case "INTERNSHIP":
        setData(INTERNSHIP);
        break;

      default:
        setData(EDUCATION);
    }
  });

  return (
    <div>
      <h2>Tables</h2>
    </div>
  );
};

export default Table;
