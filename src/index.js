import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import './assets/scss/style.scss';
import Task from "./pages/Task/Task"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Task />}></Route>
        <Route path="*" element={<Navigate to={""} />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
