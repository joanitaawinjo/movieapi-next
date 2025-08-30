"use client";

import Link from "next/link";
import useLatestMovies from "./hooks/useLatest";
import useFavorites from "./hooks/useFavorites";

import SearchBar from "./components/SharedComponents/searchBar";
import Footer from "./footer/page";
import MovieHero from "./components/SharedComponents/heroPage";
import MovieCard from "./components/SharedComponents/moviCard";

export default function Home() {
  const { movies, loading, error } = useLatestMovies();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  const featured = movies[0];

  return (
    <>
      <header className="flex justify-between items-center p-5">
        <h1 className="text-3xl font-extrabold">Moovie</h1>
        <SearchBar />
        <Link href="/login"><button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Signin</button></Link>
        <Link href="/favorites"><button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go to Favorites</button></Link>
      </header>
      {featured && (
        <MovieHero movie={featured} onAddFavorite={addFavorite} isFavorite={isFavorite}/>
      )}
      <section className="p-5">
        <h2 className="text-5xl font-semibold mt-20 mb-10">Latest Movies & Series</h2>
        <div className="flex flex-wrap gap-5">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} onAddFavorite={addFavorite} onRemoveFavorite={removeFavorite} isFavorite={isFavorite(m.id)}/>
          ))}
        </div>
      </section>
       <Footer/>
    </>
  );
 
}