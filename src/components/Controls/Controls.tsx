import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  fetchCat,
  toggleEnabled,
  toggleAutoUpdate,
} from "../../store/catSlice";
import { Button, Container, CheckboxWrapper } from "./Controls.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Controls = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { enabled } = useSelector((state: RootState) => state.cat);

  const handleGetCat = () => {
    if (!enabled) {
      toast.error("Fetching is disabled!");
      return;
    }
    dispatch(fetchCat());
  };

  return (
    <Container>
      <CheckboxWrapper>
        <label>
          <input type="checkbox" onChange={() => dispatch(toggleEnabled())} />
          Enabled
        </label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch(toggleAutoUpdate())}
          />
          Automatic update every 5 seconds
        </label>
      </CheckboxWrapper>
      <Button onClick={handleGetCat}>Get Cat</Button>
    </Container>
  );
};

export default Controls;
