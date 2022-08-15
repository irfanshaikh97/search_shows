import React from "react";
import "../components/shows.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Shows() {
  const [showData, setShowData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let query = params.get("q");
    const date = new Date();
    const todayDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    console.log(todayDate);
    let url = query
      ? `https://api.tvmaze.com/search/shows?q=${query}`
      : `https://api.tvmaze.com/schedule?country=US&${todayDate}`;
    fetch(url)
      .then((respo) => respo.json())
      .then((res) => {
        setShowData(res);
      });
  }, [location]);

  return showData.length !== 0 ? (
    <>
      <div className="heading_container">
        <h2 className="show_heading">
          Shows to watch - Find the best for you with JustWatch
        </h2>
      </div>
      <div className="shows_container">
        {showData.map((data) => (
          <Link to={`/show/${data.show.id}`}>
            <div className="card" key={data.id}>
              {
                <img
                  src={
                    data.show.image
                      ? data.show.image.medium
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                  }
                  alt="text"
                  className="card_image"
                />
              }
            </div>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <h1 className="no_data">No data found</h1>
  );
}

export default Shows;
