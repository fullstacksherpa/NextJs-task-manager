"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./themes";
import axios from "axios";


export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoaading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const theme = themes[selectedTheme];
  const allTasks = async () => {
    setIsLoaading(true);
    try {
      const res = await axios.get("/api/tasks");
      setTasks(res.data)
      setIsLoaading(false)
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    allTasks();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
      }}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
