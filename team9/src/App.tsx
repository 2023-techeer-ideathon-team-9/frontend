import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import { routes } from "@/Routes";
import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/mainpage";
import ListPage from "./pages/listPage/searchPage";

function App() {
  //const elem = useRoutes(routes);
  return (
    <>
      <Routes>
        <Route path="/home" element={<MainPage />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
