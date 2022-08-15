import React, { useEffect, useState } from "react";
import "../components/showDetails.css";
import { useParams } from "react-router-dom";

function ShowDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((respo) => {
        setData(respo);
      });
  }, [id]);

  return (
    <>
      {data ? (
        <>
          <div className="show_details">
            <h2 className="show_details_title">{data.name}</h2>
            <div className="show_details_child1">
              <img
                src={
                  data.image
                    ? data.image.medium
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                }
                alt="show_img"
                className="show_details_img"
              />

              <div>
                <article
                  className="show_details_description"
                  dangerouslySetInnerHTML={{ __html: data.summary }}
                />
                <div className="show_info">
                  <h4>
                    Type: <span className="show_info_details">{data.type}</span>
                  </h4>
                  <h4>
                    Language:{" "}
                    <span className="show_info_details">{data.language}</span>
                  </h4>
                  <h4>
                    Genre:{" "}
                    <span className="show_info_details">{data?.genres}</span>
                  </h4>
                  <h4>
                    Rating:{" "}
                    <span className="show_info_details">
                      {data?.rating?.average}
                    </span>
                  </h4>
                  <h4>
                    Status:{" "}
                    <span className="show_info_details">{data.status}</span>
                  </h4>
                  <h4>
                    Runtime:{" "}
                    <span className="show_info_details">{data.runtime}</span>
                  </h4>
                  <h4>
                    Official Site:{" "}
                    <span className="show_info_details">
                      <a
                        className="website"
                        target="_blank"
                        rel="noreferrer"
                        href={data.officialSite}
                      >
                        Click Me
                      </a>
                    </span>
                  </h4>
                  <h4>
                    Schedule:{" "}
                    <span className="show_info_details">{`${data.schedule?.days.join(
                      ","
                    )}, ${data.schedule?.time}`}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Data not found</h1>
      )}
    </>
  );
}

export default ShowDetails;
