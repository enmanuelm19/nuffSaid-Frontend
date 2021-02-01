import React, { useState, useEffect } from "react";
import Api from "../api";
import { Grid, Button, Container, makeStyles } from "@material-ui/core";
import Header from "./header";
import MessageGrid from "./message-grid";
import Toast from "./toast";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#52d6db",
    margin: "3px",
  },
});

const MessageList = (props) => {
  const [message, setMessage] = useState(null);
  const [apiStarted, setApiStarted] = useState(false);
  const [api] = useState(
    new Api({
      messageCallback: (message) => {
        messageCallback(message);
      },
    })
  );

  useEffect(() => {
    api.start();
    setApiStarted(true);
  }, [api]);

  const classes = useStyles();

  const messageCallback = (message) => {
    setMessage(message);
  };

  const renderButtons = () => {
    return (
      <Grid container justify="center">
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            if (apiStarted) {
              api.stop();
              setApiStarted(false);
            } else {
              api.start();
              setApiStarted(true);
            }
          }}
        >
          {apiStarted ? "Stop" : "Start"}
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => setMessage(null)}
        >
          Clear
        </Button>
      </Grid>
    );
  };

  return (
    <Container justify="center">
      <Header />
      <Toast message={message} />
      {renderButtons()}
      <MessageGrid message={message} />
    </Container>
  );
};

export default MessageList;
