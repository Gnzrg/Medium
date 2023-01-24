import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { data } from "./BarChart";
export default function User() {
  const init = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    organization: "",
    userType: "",
  };
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(init);
  const [userData, setUserData] = useState([]);

  const onSave = (e) => {
    e.preventDefault();
    console.log(user);
    fetch("https://medium-api-psi.vercel.app/api/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
      })
      .catch((err) => console.log(err));
    setModal(!modal);
  };
  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/users")
      .then((res) => res.json())
      .then((data) => setUserData(data.result))
      .catch((err) => console.log("error"));
  }, []);
  // const handleDelete = (id) => {
  //   fetch(`https://medium-api-psi.vercel.app/api/users?id=${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  const styleObj = {
    display: modal ? "block" : "none",
  };
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <Outlet />
      <div>
        <button className="btn btn-primary" onClick={handleModal}>
          Create User
        </button>
      </div>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Full Name </th>
              <th>Organization</th>
              <th>Username</th>
              <th>UserType</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(
              (
                {
                  firstName,
                  lastName,
                  organization,
                  username,
                  password,
                  userType,
                  _id,
                },
                index
              ) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      {firstName} {lastName}
                    </td>
                    <td>{organization}</td>
                    <td>{username}</td>
                    <td>{userType}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        // onClick={handleDelete(_id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <div>
        <div className="modal1" style={styleObj}>
          <span
            className="fs-2 d-flex justify-content-end"
            onClick={handleModal}
          >
            X
          </span>
          <div className="modal2  d-flex justify-content-center">
            <div>
              <h1>Create User</h1>
              <label for="firstName">FirstName</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                onChange={(e) => {
                  setUser({ ...user, firstName: e.target.value });
                }}
              />
              <label for="lastName">LastName</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                onChange={(e) => {
                  setUser({ ...user, lastName: e.target.value });
                }}
              />
              <label for="userType">User Type</label>
              <div className="userType d-flex gap-4">
                <select
                  className="form-control"
                  onChange={(e) => {
                    setUser({ ...user, userType: e.target.value });
                  }}
                >
                  <option value="0">User type..</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <label for="organ">Organization</label>
              <input
                type="text"
                id="organ"
                className="form-control"
                onChange={(e) => {
                  setUser({ ...user, organization: e.target.value });
                }}
              />
              <label for="userName">Username</label>
              <input
                type="text"
                id="userName"
                className="form-control"
                onChange={(e) => {
                  setUser({ ...user, username: e.target.value });
                }}
              />
              <laber for="pass">Password</laber>
              <input
                type="password"
                id="pass"
                className="form-control"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
              <button className="btn btn-primary mt-3" onClick={onSave}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
