import React from "react";
import { useNavigate } from "react-router-dom";

function Categorie({ categorie, type, path }) {
  const background =
    type === "M" ? { background: "#2BD9AF" } : { background: "#FF5E84" };
  const history = useNavigate();
  const navigate = () => history(path);
  return (
    <div
      className="
        flex items-center justify-center
        h-60 w-1/2
        shadow-2xl rounded-lg relative transition duration-300 
        ease-in-out transform hover:-translate-y-1 hover:scale-95 cursor-pointer"
      style={background}
      onClick={navigate}
    >
      <h1 className="font-semibold text-white 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base xs:text-xs">
        {categorie}
      </h1>
    </div>
  );
}

export default Categorie;
