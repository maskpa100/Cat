import React, { useEffect } from "react";
import Controls from "./components/Controls/Controls";
import CatImage from "./components/CatImage/CatImage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { fetchCat } from "./store/catSlice";
import { ToastContainer } from "react-toastify";
import "./styles/global.scss";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { autoUpdate, enabled } = useSelector((state: RootState) => state.cat);

  useEffect(() => {
    if (!autoUpdate || !enabled) return;

    const interval = setInterval(() => {
      dispatch(fetchCat());
    }, 5000);

    return () => clearInterval(interval);
  }, [autoUpdate, enabled, dispatch]);

  return (
    <div className="app">
      <Controls />
      <CatImage />
      <ToastContainer />
    </div>
  );
};

export default App;
