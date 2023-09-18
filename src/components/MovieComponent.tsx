import React from "react";
import { Link } from "react-router-dom";
interface movieType {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
}
const MovieComponent = ({ movie }: { movie: movieType }) => {
    console.log(movie);
    return (
        <Link
            to={`/movie/${movie.id}`}
            className="w-6/12 sm:w-4/12 md:w-3/12 lg:w-2/12 min-h-[50%] flex justify-center my-2"
        >
            <div
                className="bg-white w-11/12  rounded-md cursor-pointer"
                style={{ boxShadow: "0px 0px 5px 0px #000" }}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="rounded-t-lg h-36 w-full"
                />
                <div className="p-2">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-bold">{movie.title}</h3>
                        <p>{movie.vote_average}</p>
                    </div>
                    <p className="leading-none mt-1">{movie.overview.slice(0, 50)}</p>
                </div>
            </div>
        </Link>
    );
};

export default MovieComponent;
