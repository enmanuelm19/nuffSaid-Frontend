import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Message from "./message";

const List = (props) => {
  const { title, messages, type, deleteMessage } = props;

  const renderMessages = () => {
    return messages.map((message, index) => {
      return (
        <Grid item xs={12} key={`${message.priority}_${index}`}>
          <Message
            message={message}
            type={type}
            deleteMessage={deleteMessage}
          />
        </Grid>
      );
    });
  };

  return (
    <Grid container item xs={12} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="h4">
          Count {messages.length}
        </Typography>
      </Grid>
      {renderMessages()}
    </Grid>
  );
};

export default List;
