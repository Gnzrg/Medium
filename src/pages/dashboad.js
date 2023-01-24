import React, { useEffect, useState } from "react";
import { BarChart } from "./BarChart";
export default function Dashboard() {
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
      <div className="row my-4">
        <div className="col-md-4">
          <div className="card">
            <h4 className="card-title text-warning">Users</h4>
            <div className="d-flex justify-content-between align-items-center">
              <i>
                <i class="bi bi-people" style={{ fontSize: "40px" }}></i>
              </i>
              <h3 className="text-primary">4500</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h4 className="card-title text-warning">News</h4>
            <div className="d-flex justify-content-between align-items-center">
              <i>
                <i class="bi bi-newspaper" style={{ fontSize: "40px" }}></i>
              </i>
              <h1 className="text-primary">{data.length}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h4 className="card-title text-warning">Category</h4>
            <div className="d-flex justify-content-between align-items-center">
              <i>
                <i class="bi bi-list-nested" style={{ fontSize: "40px" }}></i>
              </i>
              <h1 className="text-primary">20</h1>
            </div>
          </div>
        </div>
      </div>
      <BarChart />
      <div className="row p-3">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>№</th>
                <th>Title </th>
                <th>Category</th>
                <th>Is Trending?</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ _id, title, isTrending, category }, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>
                      {isTrending ? (
                        <button className="btn btn-success">Yes</button>
                      ) : (
                        <button className="btn btn-danger">NO</button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
