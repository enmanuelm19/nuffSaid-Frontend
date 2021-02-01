import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { PRIORITIES } from "../constants";

const useStyles = makeStyles({
  button: {
    textTransform: "none",
  },
});

const Message = (props) => {
  const { type, message, deleteMessage } = props;

  const classes = useStyles();

  const color = PRIORITIES.find((priority) => priority.cod === message.priority)
    .style;

  const handleClick = () => {
    deleteMessage(message);
  };

  return (
    <Alert
      variant="filled"
      severity={type}
      icon={false}
      style={{ backgroundColor: color }}
      action={
        <Button
          className={classes.button}
          color="inherit"
          size="small"
          onClick={handleClick}
        >
          Clear
        </Button>
      }
    >
      {message.message}
    </Alert>
  );
};

export default Message;
