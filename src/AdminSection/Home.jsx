import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1 className='text-center text-danger'>Admin Panel </h1>
      <div className='container-fluid mt-3'>
        <Link to="/add" style={{ textDecoration: 'none' }}>
          <h2 className='text-success ms-2'>
            Add Brokers:
            <button className='btn btn-success font-weight-bold btn-sm ms-2'><i className="fa-solid fa-user-plus"></i> Add</button>
          </h2>
        </Link>{" "}
        <div className='d-flex p-5  highlighted'>
          <table className="table table-success table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Broker Name</th>
                <th scope="col">Country Name</th>
                <th scope="col">Website</th>
                <th scope="col">Rank</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td></td> {/* Replace this with your actual content */}
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className='btn btn-warning me-3'>
                    {" "}
                    <i className="fa-solid fa-pen"></i> {" "}
                  </button>
                  <button className="btn btn-danger">
                    {" "}
                    <i className="fa-solid fa-trash"></i>{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>

  )
}

export default Home