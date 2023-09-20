import axios from "axios";

export const getMovies =
  (key = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "MoviesRequest" });

      let link = `/api/v1/all/movies?keyword=${key}`;
      const { data } = await axios.get(link);
      dispatch({ type: "MoviesSuccess", payload: data.movies });
    } catch (err) {
      dispatch({ type: "MoviesFail", payload: err.response.data.message });
    }
  };

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: "MovieRequest" });

    const { data } = await axios.get(`/api/v1/movie/${id}`);
    dispatch({ type: "MovieSuccess", payload: data.movie });
  } catch (err) {
    dispatch({ type: "MovieFail", payload: err.response.data.message });
  }
};
