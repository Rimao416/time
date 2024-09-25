interface LifeProps {
  image: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

import React from "react";

const Life: React.FC<LifeProps> = ({ image, top, left, right, bottom }) => {
  return (
    <div className="life__wrapper"
      style={{
        position: "absolute", // Pour pouvoir positionner l'image avec top, left, right, bottom
        top: top || "auto", // Applique les positions si elles sont définies
        left: left || "auto",
        right: right || "auto",
        bottom: bottom || "auto",
      }}
    >
      <img className="life__image" src={image} alt="Life" style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default Life;
