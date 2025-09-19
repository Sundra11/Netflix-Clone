import { useEffect, useState, type FunctionComponent } from "react";
// import { fetchNowPlaying } from "../api/tmdb";

interface HeroProps {}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const Hero: FunctionComponent<HeroProps> = () => {
  

  return (
    <>
      <div>Hero section</div>
    </>
  );
};

export default Hero;
