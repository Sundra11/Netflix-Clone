// const API_KEY = import.meta.env.VITE_API_KEY;
// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const fetchNowPlaying = async () => {
//   const response = await fetch(
//     `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
//   );
//   if (!response.ok) {
//     const errorText = await response.text(); // for debugging
//     throw new Error(
//       `API error: ${response.status} ${response.statusText} - ${errorText}`
//     );
//   }
//   const data = await response.json();
//   return data.results;
// };
