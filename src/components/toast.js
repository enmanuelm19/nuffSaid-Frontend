import React, { useEffect, useState } from "react";
import { Snackbar, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { ERROR_CODE, PRIORITIES } from "../constants";

const Toast = (props) => {
  const { message } = props;
  const [state, setState] = useState({
    open: false,
    error: undefined,
    toastQueue: [],
  });

  useEffect(() => {
    if (state.toastQueue.length && !state.error) {
      setState((prev) => ({
        error: state.toastQueue[0],
        toastQueue: prev.toastQueue.slice(1),
        open: true,
      }));
    } else if (state.toastQueue.length && state.error && state.open) {
      setTimeout(() => {
        closeToast();
      }, 2000);
    }
  }, [state]);

  useEffect(() => {
    if (message && message.priority === ERROR_CODE) {
      setState((prev) => ({
        ...prev,
        toastQueue: [...prev.toastQueue, message],
      }));
    }
  }, [message]);

  const color = PRIORITIES.find((priority) => priority.cod === ERROR_CODE)
    .style;

  const closeToast = () => {
    setState((prev) => ({ ...prev, open: false, error: undefined }));
  };

  const handleClose = () => {
    if (state.toastQueue.length) {
      closeToast();
    }
  };

  return (
    <Snackbar
      open={state.open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      action={
        <Button severity="error" size="small" onClick={() => closeToast()}>
          X
        </Button>
      }
    >
      <Alert
        severity="error"
        icon={false}
        style={{ backgroundColor: color }}
        action={
          <Button severity="error" size="small" onClick={() => closeToast()}>
            X
          </Button>
        }
      >
        {state.error ? state.error.message : null}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
