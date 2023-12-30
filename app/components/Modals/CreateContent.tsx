"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.value);
        break;
      case "important":
        setImportant(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault;
    const task = {
      title,
      description,
      date,
      isCompleted: completed,
      isImportant: important,
    };
    try {
      const res = await axios.post("/api/tasks", task);
      if (res.data.error) {
        toast.error(res.data.error);
      }

      toast.success("Task created successfully");
    } catch (error) {
      toast.error("something went wrong.");
      console.log(error);
    }
  };

  return (
    <form className="text-green-500" onSubmit={handleSubmit}>
      <h1>Create a Tasks</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleChange("title")}
          placeholder="title of your task"
        />
      </div>

      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          rows={4}
          onChange={handleChange("description")}
          placeholder="description of your task"
        />
      </div>

      <div className="input-control">
        <label htmlFor="date">date</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={handleChange("date")}
          placeholder="date of your task"
        />
      </div>
      <div className="input-control">
        <label htmlFor="completed">completed</label>
        <input
          type="checkbox"
          id="completed"
          value={completed.toString()}
          onChange={handleChange("completed")}
          placeholder="completed of your task"
        />
      </div>

      <div className="input-control">
        <label htmlFor="important">Important</label>
        <input
          type="checkbox"
          id="important"
          value={completed.toString()}
          onChange={handleChange("important")}
          placeholder="important of your task"
        />
      </div>
      <div className="submit">
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default CreateContent;
