import React from "react";

function Card({ price, description, title, image, type, category }) {
  const background =
    category === "men's clothing"
      ? { background: "#2BD9AF" }
      : { background: "#FF5E84" };
  const pageTypewidth = type == "H" ? "w-1/4 flex-shrink-0" : "";

  return (
    <div
      className={`${pageTypewidth} h-80 shadow-2xl rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer`}
    >
      <div className="m-3 flex flex-col items-center h-1/2">
        <h3 className="text-sm font-medium text-center">{title}</h3>
        <img
          src={image}
          alt={image}
          className="w-auto h-1/2 object-cover mt-5"
        />
      </div>
      <div
        className="flex flex-col items-center rounded-t-lg rounded-b-lg h-1/2 p-1 overflow-auto no-scrollbar"
        style={background}
      >
        <h1 className="text-blue-700 font-medium">Rs {price}</h1>
        <p className="text-center mt-4 px-5 text-xs 2xl:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
