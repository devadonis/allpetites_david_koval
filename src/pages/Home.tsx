import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import React from "react";
import MovieComponent from "../components/MovieComponent";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/actions/movieAction";

const Home = () => {
	const dispatch = useDispatch();
	const { movies, loading } = useSelector((state: any) => state.movies);
	const [input, setInput] = useState<any>("");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getMovies(input));
	};

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	return (
		<div>
			<div
				className="bg-blue px-8 py-2 flex items-center justify-between"
				style={{ boxShadow: "0px 0px 5px 0px #000" }}
			>
				<div className="relative flex items-center ">
					<span className="absolute pl-2 ">
						<IoMdSearch style={{ fontSize: "25px" }} />
					</span>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Search"
							className="pl-12 rounded-sm py-1 md:w-96"
							onChange={(e) => setInput(e.target.value)}
						/>
					</form>
				</div>
				<p className="text-xl cursor-pointer">
					<AiFillHome />
				</p>
			</div>
			<div className="px-8 py-2 flex  flex-wrap items-center  h-fit">
				{loading ? (
					<p>Loading.........</p>
				) : (
					movies &&
					movies.map((movie: any, ind: any) => {
						return <MovieComponent key={ind} movie={movie} />;
					})
				)}

				{movies && movies.length === 0 && !loading ? <p>No movie found</p> : null}
			</div>
		</div>
	);
};

export default Home;
