import { useEffect, useState, type FunctionComponent } from "react";
import Navbar from "./Navbar";

interface HomePageProps {}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/movie/now_playing?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        if (!response.ok) {
          console.error("Failed to fetch movies:", response.statusText);
          return;
        }

        const data = await response.json();
        setMovies(data.results);
        console.log("Fetched movies:", data.results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchNowPlaying();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
};

export default HomePage;
