import React from "react";
import { Link } from "react-router-dom";

const MovieComponent = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie._id}`}
      className="w-2/12 h-fit flex justify-center my-2"
    >
      <div
        className="bg-white w-11/12  rounded-md cursor-pointer"
        style={{ boxShadow: "0px 0px 5px 0px #000" }}
      >
        <img
          src="https://i.ytimg.com/vi/v6f66NY6MpU/maxresdefault.jpg"
          className="rounded-t-lg h-36 w-full"
        />
        <div className="p-2">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-bold">{movie.name}</h3>
            <p>{movie.rating}</p>
          </div>
          <p className="leading-none mt-1">{movie.description.slice(0, 50)}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieComponent;
