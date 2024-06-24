import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

function Home() {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(
      deleteUser({
        id: id,
      })
    );
  };
  return (
    <div className="p-5">
      <div className="pb-4">
        <h2 className="font-semibold text-3xl pb-6">
          Crud App with JSON Server
        </h2>
        <Link
          to="/create"
          className="p-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Create +
        </Link>
      </div>
      <table className="w-full text-center border-collapse shadow-lg">
        <thead className="bg-gray-200">
          <tr className="border-b-2 border-gray-300">
            <th className="p-3 text-gray-700">ID</th>
            <th className="p-3 text-gray-700">Name</th>
            <th className="p-3 text-gray-700">Email</th>
            <th className="p-3 text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-b-2 border-gray-200 hover:bg-gray-100"
            >
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3 space-x-2">
                <Link
                  to={`/edit/${user.id}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
