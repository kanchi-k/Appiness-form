import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Slices/userSlice";
import './EmployeeList.css'

const EmployeeList = () => {
  const users = [
    {
      id: 1,
      name: "test1",
      age: "11",
      gender: "male",
      email: "test1@gmail.com",
      phoneNo: "9415376532",
    },
    {
      id: 2,
      name: "test2",
      age: "12",
      gender: "male",
      email: "test2@gmail.com",
      phoneNo: "9415376532",
    },
    {
      id: 3,
      name: "test3",
      age: "13",
      gender: "male",
      email: "test3@gmail.com",
      phoneNo: "9415376532",
    },
    {
      id: 4,
      name: "test4",
      age: "14",
      gender: "male",
      email: "test4@gmail.com",
      phoneNo: "9415376532",
    },
    {
      id: 5,
      name: "test15",
      age: "15",
      gender: "male",
      email: "test5@gmail.com",
      phoneNo: "9415376532",
    },
    {
      id: 6,
      name: "test6",
      age: "16",
      gender: "male",
      email: "test6@gmail.com",
      phoneNo: "9415376532",
    },
  ];
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div>
      <h1>Employee List</h1>
      <br />
      
      <div>
          {users.map(user => {
              return (
              <div className='user-table'>
              <div>Id: {user.id}</div>
              <div>Name: {user.name}</div>
              <div>Age: {user.age}</div>
              <div>Gender: {user.gender}</div>
              <div>Email: {user.email}</div>
              <div>Contact: {user.phoneNo}</div>
              </div>
          )})}
      </div>

      <button className="button" onClick={(e) => logoutHandler(e)}>Logout</button>
    </div>
  );
};

export default EmployeeList;
