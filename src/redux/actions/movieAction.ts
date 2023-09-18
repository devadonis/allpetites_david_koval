import axios from "axios";

export const getMovies: any =
	(key = "") =>
		async (dispatch: any) => {
			try {
				dispatch({ type: "MoviesRequest" });

				let link = `https://api.themoviedb.org/3/discover/movie?api_key=a8e576755b7df52f6d199ce7d1d6adb6`;
				let sLink = `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=a8e576755b7df52f6d199ce7d1d6adb6`;

				if (key === "") {
					const { data } = await axios.get(link);
					dispatch({ type: "MoviesSuccess", payload: data.results });
				} else {
					const { data } = await axios.get(sLink);
					dispatch({ type: "MoviesSuccess", payload: data.results });
				}
			} catch (err: any) {
				dispatch({ type: "MoviesFail", payload: err.response.data.message });
			}
		};

export const getMovie: any = (id: string) => async (dispatch: any) => {
	try {
		dispatch({ type: "MovieRequest" });

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=a8e576755b7df52f6d199ce7d1d6adb6`
		);
		dispatch({ type: "MovieSuccess", payload: data });
		// console.log(data);
	} catch (err: any) {
		dispatch({ type: "MovieFail", payload: err.response.data.message });
	}
};
