import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/navbar.css";

function Navbar() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function changeHandler(event) {
    setMessage(event.target.value);
  }

  function inputQuery() {
    navigate({
      pathname: "/",
      search: `?q=${message}`,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="nav">
        <Link to="" className="nav_logo">
          <p>FunTv</p>
        </Link>
        <div>
          <form onSubmit={submitHandler}>
            <input
              className="nav-search"
              id="searchQuery"
              onChange={changeHandler}
              type="search"
              aria-label="Search"
              placeholder=" Search For Shows"
            />
            <button className="nav-button" type="submit" onClick={inputQuery}>
              <FaSistrix />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Navbar;
