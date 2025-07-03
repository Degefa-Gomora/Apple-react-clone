import React, { useState, useEffect } from "react";
import "./YouTube.css";

const Youtube = () => {
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const [sortOption, setsortOption] = useState(["date"]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=${sortOption}&key=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setYouTubeVideos(data.items))
      .catch((err) => console.error("Failed to fetch videos:", err));
  }, [sortOption]);

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
              value={sortOption}
              onChange={(e) => setsortOption(e.target.value)}
            >
              <option value="date">Latest</option>
              <option value="rating">Most Popular</option>
              <option value="relevance">Most Relevant</option>
              <option value="viewcount">Most Viewed</option>
            </select>
          </div>
          {youTubeVideos.map((video, i) => {
            const vidId = video?.id?.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            const snippet = video?.snippet;

            if (!vidId || !snippet) return null;

            return (
              <div key={i} className="col-sm-12 col-md-4">
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
