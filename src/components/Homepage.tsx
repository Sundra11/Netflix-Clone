import { useEffect, useState, type FunctionComponent } from "react";
import Navbar from "./Navbar";
import { Play, Info } from "lucide-react";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface HomePageProps {}

interface Movies {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [bgHero, setBgHero] = useState<string>("");

  const [fade, setFade] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === movies.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies[currentIndex];

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
        setBgHero(data.results[0]?.backdrop_path);
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
        <div>
          <div id="hero-image" className="min-h-screen relative">
            <img
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              src={`https://image.tmdb.org/t/p/original${
                movies[(currentIndex - 1 + movies.length) % movies.length]
                  ?.backdrop_path
              }`}
              alt={currentMovie?.title}
            />

            <img
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              src={`https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path}`}
              alt={currentMovie?.title}
            />

            <div className="absolute inset-0 flex flex-col justify-evenly pl-10 bg-gradient-to-r from-black/80 to-transparent">
              <div
                className={`text-white max-w-xl px-10 space-y-4 transition-opacity duration 700 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <h1 className="text-5xl font-extrabold leading-tight">
                  {currentMovie?.title}
                </h1>

                <p className="text-lg font-semibold mb-2">
                  {currentMovie?.overview}
                </p>

                <div className="flex space-x-4">
                  <button className="bg-white text-black rounded-md font-semibold px-5 py-2 flex items-center">
                    <Play className="inline-block mr-2 text-black" />
                    Play
                  </button>
                  <button className="bg-white/20 text-white rounded-md px-5 py-2 flex items-center hover:bg-white/30 cursor-pointer transition font-semibold border border-white">
                    <Info className="inline-block mr-2 text-white font-semibold" />
                    More Information
                  </button>
                </div>
              </div>
              <div className="pl-10 pb-10">
                <div className="mt-10 w-full">
                  <h1 className="text-2xl text-white font-semibold">
                    Popular on Netflix
                  </h1>
                  <div className="flex gap-4 mt-4 overflow-x-autoscrollable-hide overflow-x-hidden">
                    {movies.map((movie, _) => {
                      return (
                        <div
                          key={movie.id}
                          className="min-w-[280px] max-w-[170px]"
                        >
                          <img
                            className={`w-full h-full rounded-md object-cover 
                            }`}
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={movie.title}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
