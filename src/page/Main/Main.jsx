import React, { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/actions";


const Main = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const searchMovies = useSelector((state) => state.searchMovies);
  const currentPage = useSelector((state) => state.currentPage);
  const fetching = useSelector((state) => state.fetching);

  useEffect(() => {
      dispatch(fetchMovies(currentPage))
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (fetching) return;
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement
      if (scrollTop + clientHeight === scrollHeight) {
        dispatch(fetchMovies(currentPage))
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fetching]);

  return (
    <section>
      <SearchForm />
      <CardList movies={ searchMovies.length > 0 ? searchMovies : movies } />
    </section>
  );
};

export default Main;