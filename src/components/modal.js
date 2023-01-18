import { useState } from "react";

export default function Modal({ modal, setLogIn, user, hide, admin }) {
  const styleObj = {
    display: modal ? "block" : "none",
  };
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleChange2 = (e) => {
    setPass(e.target.value);
  };

  const log = () => {
    if (email === user.email && pass === user.password) {
      hide();
      alert("Success");
      setLogIn(true);
    } else {
      alert("wrong");
    }
  };

  return (
    <div className="modal-my" style={styleObj}>
      <div className="container bg-white w-50 border rounded">
        <div className="d-flex justify-content-end">
          <button onClick={hide} className="border border-white bg-white fs-3">
            X
          </button>
        </div>
        <div className="modal-head text-center py-5">
          <h1>Sign in</h1>
        </div>
        <div className="modal-body d-flex flex-column gap-3 ">
          <div className="email d-flex justify-content-between">
            <label for="email">E-mail:</label>
            <input
              type="e-mail"
              id="email"
              className="from-control border-white w-75"
              placeholder="E-Mail..."
              onChange={handleChange}
            />
          </div>
          <div className="pass d-flex justify-content-between">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              className="from-control border-white w-75"
              placeholder="Password..."
              onChange={handleChange2}
            />
          </div>
          <div className="text-center py-5">
            <button
              type="button"
              className="border border-none rounded bg-success text-white w-25 "
              onClick={log}
            >
              Sign in
            </button>
          </div>
          <p className="text-center">
            Admin?
            <p className="text-warning" onClick={admin}>
              Admin sign in
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
