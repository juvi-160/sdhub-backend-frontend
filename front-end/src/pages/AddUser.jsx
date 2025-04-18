import React from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import { backendUrl } from "../App";


const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${backendUrl}/users/add`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("User added:", response.data);
      alert("User added successfully!");
    } catch (err) {
      console.error("Error adding user:", err.message);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center p-10 bg-amber-200 rounded-2xl gap-4 h-70 w-1/2 m-auto mt-10">
        <h1 className="text-2xl font-bold">Add User</h1>
        <input
        className="border-2 border-gray-960 rounded-md p-2"
          type="text"
          placeholder="User Name"
          {...register("name", { required: true })}
        />
        {errors.name && <p>Name is required</p>}

        <input
        className="border-2 border-gray-960 rounded-md p-2"
          type="number"
          placeholder="User Age"
          {...register("age", { required: true })}
        />
        {errors.age && <p>Age is required</p>}

        <input className="bg-amber-950 rounded-2xl hover:bg-amber-600 text-white  p-3" type="submit" value="Add User" />
      </form>
    </>
  );
};

export default AddUser;
