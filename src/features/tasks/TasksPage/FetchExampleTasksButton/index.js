import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import Button from "../Buttons";

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {
        loading
          ? "Pobieranie..."
          : "Pobierz przykładowe zadania"
      }
    </Button>
  );
};