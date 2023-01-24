import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((response) => response.json())
      .then((dt) => {
        console.log(dt.result);
        setData(dt.result);
      });
  }, []);

  return (
    <div>
      <div className="navbar bg-dark d-flex flex-nowrap">
        <a href="/home" className="navbar-brand col-md-3 text-light">
          Company Name
        </a>
        <input
          type="text"
          className="w-75 from-control border border-dark bg-dark"
        />
        <div className="nav">
          <div className="nav-item">
            <span className="text-light">Log Out</span>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="nav bg-light flex-column">
              <div className="nav-item">
                <Link to="/" className="text-decoration-none text-dark">
                  {" "}
                  Dashboard
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/news" className="text-decoration-none text-dark">
                  News
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/category" className="text-decoration-none text-dark">
                  Category
                </Link>
              </div>
              <div className="nav-item">
                <Link className="text-decoration-none text-dark" to="/user">
                  New User
                </Link>
              </div>
            </div>
          </div>
          <div className="contain col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
