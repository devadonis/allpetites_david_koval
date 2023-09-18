import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovie } from "../redux/actions/movieAction";
import { AiFillHome } from "react-icons/ai";
import axios from "axios";

const SingleMovie = () => {
	const id: any = useParams();
	const dispatch = useDispatch();
	const { movie, loading } = useSelector((state: any) => state.movie);

	//Movie Year
	const date = new Date(movie && movie.release_date);

	const [cast, setCast] = useState([]);
	const [crew, setCrew] = useState([]);

	//Hour Function
	function toHoursAndMinutes(totalMinutes: any) {
		const minutes = totalMinutes % 60;
		const hours = Math.floor(totalMinutes / 60);

		return `${padTo2Digits(hours)}hr : ${padTo2Digits(minutes)}min`;
	}
	function padTo2Digits(num: any) {
		return num.toString().padStart(2, "0");
	}

	// console.log(typeof crew);
	useEffect(() => {
		const fetch = async () => {
			const { data } = await axios.get(
				`https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=a8e576755b7df52f6d199ce7d1d6adb6`
			);
			setCast(data.cast);
			setCrew(data.crew);
			dispatch(getMovie(id.id));
		};
		fetch();
	}, [id]);
	return (
		<div>
			<div
				className="bg-blue px-8 py-2 flex items-center justify-between"
				style={{ boxShadow: "0px 0px 5px 0px #000" }}
			>
				<div className="relative flex items-center ">
					<p className="text-lg font-medium">Movie Details</p>
				</div>
				<Link to="/" className="text-xl cursor-pointer">
					<AiFillHome />
				</Link>
			</div>
			{loading ? (
				<p>Please wait</p>
			) : (
				<div className="md:flex my-5 px-8">
					<div className="md:w-2/12 ">
						<img
							src={`https://image.tmdb.org/t/p/w500${movie && movie.poster_path}`}
							className="rounded-lg h-52 w-full "
							style={{ boxShadow: "0px 0px 4px 0px #000" }}
						/>
					</div>
					<div className="md:w-10/12 pl-3 mt-5 md:mt-0">
						<p className="text-xl font-medium">
							{movie && movie.title} ({movie && movie.vote_average})
						</p>

						<p className="text-medium flex">
							<p className="mr-1"> {movie && date.getFullYear()} </p> |
							<p className="mr-1 ml-1">
								{movie && toHoursAndMinutes(movie.runtime)}{" "}
							</p>
							|
							{crew &&
								crew.map((val: any, ind: any) => {
									if (val.job === "Director") {
										return (
											<p key={ind} className="ml-1 list-none ">
												{val.name},
											</p>
										);
									}
								})}
						</p>
						<div className="flex flex-wrap">
							<p className="mr-2 font-medium">Cast: </p>
							{cast &&
								cast.map((val: any, ind: any) => {
									return (
										<li key={ind} className="mr-2 list-none ">
											{val.name},
										</li>
									);
								})}
						</div>
						<p className="">
							<span className="font-bold">Description: </span>
							{movie && movie.overview}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleMovie;
