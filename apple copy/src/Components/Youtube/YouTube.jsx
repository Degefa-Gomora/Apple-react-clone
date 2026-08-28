// import React, { useState, useEffect } from "react";
// import "./YouTube.css";

// const Youtube = () => {
//   const [youTubeVideos, setYouTubeVideos] = useState([]);
//   const [sortOption, setsortOption] = useState(["date"]);

//   useEffect(() => {
//     const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
//     const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=${sortOption}&key=${apiKey}`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setYouTubeVideos(data.items))
//       .catch((err) => console.error("Failed to fetch videos:", err));
//   }, [sortOption]);

//   return (
//     <div className="allVideosWrapper">
//       <div className="container">
//         <div className="row h-100 align-items-center justify-content-center text-center">
//           <div className="col-12">
//             <div className="title-wraper bold video-title-wrapper">
//               Latest Videos
//             </div>
//           </div>

//           <div className="d-flex justify-content-start mb-4">
//             <select
//               className="form-select w-zero"
//               value={sortOption}
//               onChange={(e) => setsortOption(e.target.value)}
//             >
//               <option value="date">Latest</option>
//               <option value="rating">Most Popular</option>
//               <option value="relevance">Most Relevant</option>
//               <option value="viewcount">Most Viewed</option>
//             </select>
//           </div>
//           {youTubeVideos.map((video, i) => {
//             const vidId = video?.id?.videoId;
//             const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//             const snippet = video?.snippet;

//             if (!vidId || !snippet) return null;

//             return (
//               <div key={i} className="col-sm-12 col-md-4">
//                 <div className="singleVideoWrapper">
//                   <div className="videoThumbnail">
//                     <a href={vidLink} target="_blank" rel="noopener noreferrer">
//                       <img
//                         src={snippet.thumbnails.high.url}
//                         alt={snippet.title}
//                       />
//                     </a>
//                   </div>
//                   <div className="videoInfoWrapper">
//                     <div className="videoTitle">
//                       <a
//                         href={vidLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {snippet.title}
//                       </a>
//                     </div>
//                     <div className="videoDesc">{snippet.description}</div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Youtube;


import React, { useState, useEffect } from "react";
import "./YouTube.css";

const Youtube = () => {
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  // Corrected: Initialize sortOption as a string, not an array, for a single-select dropdown.
  const [sortOption, setSortOption] = useState("date");
  const [error, setError] = useState(null); // State to handle API errors

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    // The 'order' parameter accepts values like 'date', 'rating', 'relevance', 'viewCount'.
    // Ensure 'sortOption' matches these valid values.
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=${sortOption}&key=${apiKey}`;
    // UCxA7AzkI2Sndf8S1G5rSkwQ;

    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&key=[YOUR_API_KEY] 

    const fetchVideos = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          // Attempt to parse the error message from the API response body
          const errorData = await response.json();
          const errorMessage =
            errorData.error && errorData.error.message
              ? errorData.error.message
              : `HTTP error! Status: ${response.status}`;
          throw new Error(`YouTube API error: ${errorMessage}`);
        }

        const data = await response.json();
        // Check if data.items exists and is an array before setting the state
        if (data.items && Array.isArray(data.items)) {
          setYouTubeVideos(data.items);
          setError(null); // Clear any previous errors
        } else {
          setYouTubeVideos([]); // Set to empty array if no items or unexpected format
          console.warn(
            "YouTube API response did not contain an 'items' array:",
            data
          );
        }
      } catch (err) {
        console.error("Failed to fetch videos:", err);
        setError(err.message); // Set error state for display
        setYouTubeVideos([]); // Clear videos on error
      }
    };

    fetchVideos();
    // Depend on sortOption so the fetch re-runs when the sort order changes
  }, [sortOption]);

  // If there's an API error, display it
  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          Error loading YouTube videos: {error}. Please check your API key and
          network connection.
        </div>
      </div>
    );
  }

  // Optionally show a loading state if videos are empty and no error
  if (youTubeVideos.length === 0 && !error) {
    return (
      <div className="container mt-5 text-center">
        <p>Loading videos or no videos found...</p>
      </div>
    );
  }

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>

          <div className="d-flex justify-content-start mb-4">
            <select
              className="form-select w-zero"
              // The 'value' prop now correctly expects a string
              value={sortOption}
              // The onChange handler correctly sets the string value
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="date">Latest</option>
              {/* Changed value from 'rating' to 'rating' (it was already 'rating') - no change needed */}
              <option value="rating">Most Popular</option>
              <option value="relevance">Most Relevant</option>
              {/* Corrected: YouTube API 'order' parameter for view count is 'viewCount' (case-sensitive) */}
              <option value="viewCount">Most Viewed</option>
            </select>
          </div>
          {/* Ensure youTubeVideos is an array before mapping */}
          {youTubeVideos.map((video, i) => {
            // Check for kind === 'youtube#video' to ensure it's a video item before trying videoId
            const vidId =
              video?.id?.kind === "youtube#video" ? video.id.videoId : null;
            // Corrected: Standard YouTube video URL format
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            const snippet = video?.snippet;

            // Only render if we have a video ID and snippet
            if (!vidId || !snippet) return null;

            return (
              <div key={vidId} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={snippet.thumbnails.high.url}
                        alt={snippet.title}
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">{snippet.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Youtube;