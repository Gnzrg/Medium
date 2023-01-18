import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSignIn({ admin }) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="w-50 d-flex flex-column gap-3 border py-5 px-5 ">
        <h1>Admin Log in</h1>
        <div>
          <label for="name">Username</label>
          <input type="text" id="name" className="form-control" />
        </div>

        <div>
          <label for="pass">Password</label>
          <input type="password" id="pass" className="form-control" />
        </div>

        <button className="btn btn-primary">
          <NavLink to="/admin" className="text-decoration-none text-white">
            Log In
          </NavLink>
        </button>
      </div>
    </div>
  );
}
