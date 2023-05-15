import React from "react";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  console.log(`value: ${value}`);

  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <FaStar style={{ marginRight: "5px" }} />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt style={{ marginRight: "5px" }} />
        ) : (
          <FaRegStar style={{ marginRight: "5px" }} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar style={{ marginRight: "5px" }} />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt style={{ marginRight: "5px" }} />
        ) : (
          <FaRegStar style={{ marginRight: "5px" }} />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar style={{ marginRight: "5px" }} />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt style={{ marginRight: "5px" }} />
        ) : (
          <FaRegStar style={{ marginRight: "5px" }} />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar style={{ marginRight: "5px" }} />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt style={{ marginRight: "5px" }} />
        ) : (
          <FaRegStar style={{ marginRight: "5px" }} />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar style={{ marginRight: "5px" }} />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt style={{ marginRight: "5px" }} />
        ) : (
          <FaRegStar style={{ marginRight: "5px" }} />
        )}
      </span>

      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
