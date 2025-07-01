import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('avengers');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const API_KEY = "320de572";
    useEffect(() => {
        fetchMovies(query);
    }, [query]);
    const fetchMovies = async (searchTerm) => {
        try {
            setLoading(true);
            const res = await axios.get(
                `http://www.omdbapi.com/?i=tt3896198&apikey=320de572&s=${searchTerm}`
            );
            if (res.data.Response === "True") {
                setMovies(res.data.Search);
                setError("");
            } else {
                setMovies([]);
                setError(res.data.Error || "No movies found.");
            }
        } catch (error) {
            setError("failed to fetch movies.");
            console.error("Error fetching movies : " + error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchMovies(searchTerm);
        setQuery(searchTerm);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">🎬 Movie Finder</h2>

            <form onSubmit={handleSearch} className="flex justify-center mb-8 gap-4">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="px-4 py-2 rounded-md border dark:bg-gray-800 dark:border-gray-700 w-64"
                />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                    Search
                </button>
            </form>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
{movies && movies.length > 0 ? (
    movies.map((movie) => (
        <motion.div
            key={movie.imdbID}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
        >
            <img
                src={
                    movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.Title}
                className="w-full h-72 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{movie.Title}</h3>
                <p className="text-sm text-gray-500">{movie.Year}</p>
            </div>
        </motion.div>
    ))
) : (
    <p className="text-center text-gray-500">No movies found.</p>
)}
            </div>
        </div>
    );
};

export default Movies;