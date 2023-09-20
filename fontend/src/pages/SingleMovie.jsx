import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../redux/actions/movieAction";
import { IoMdSearch } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";

const SingleMovie = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const { movie, loading } = useSelector((state) => state.movie);
  console.log(movie);
  useEffect(() => {
    dispatch(getMovie(id.id));
  }, [id, dispatch]);
  return (
    <div>
      <div
        className="bg-cyan-500 px-8 py-2 flex items-center justify-between"
        style={{ boxShadow: "0px 0px 5px 0px #000" }}
      >
        <div className="relative flex items-center ">
          <p className="text-lg font-medium">Movie Details</p>
        </div>
        <p className="text-xl cursor-pointer">
          <AiFillHome />
        </p>
      </div>
      <div className="flex my-5 px-8">
        <div className="w-2/12 ">
          <img
            src="https://i.ytimg.com/vi/v6f66NY6MpU/maxresdefault.jpg"
            className="rounded-lg h-52 "
            style={{ boxShadow: "0px 0px 4px 0px #000" }}
          />
        </div>
        <div className="w-10/12 pl-3">
          <p className="text-xl font-medium">
            {movie.name} ({movie.rating})
          </p>

          <p className="text-medium">
            {movie.year} | {movie.length} | {movie.director}
          </p>
          <div className="flex">
            <p className="mr-2 font-medium">Cast: </p>
            {movie.cast.map((val, ind) => {
              return (
                <p key={ind} className="mr-2">
                  {val.name},
                </p>
              );
            })}
          </div>
          <p className="mt-2">
            <span className="font-bold">Description:</span> {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
