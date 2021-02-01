import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import List from "./list";
import { PRIORITIES } from "../constants";

const MessageGrid = (props) => {
  const { message } = props;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (message) {
      setMessages((m) => [...m, message]);
    } else {
      setMessages([]);
    }
  }, [message]);

  const messagesFilteredByPriority = (priority) => {
    if (messages.length) {
      return messages.filter((m) => m.priority === priority);
    }
    return [];
  };

  const deleteMessage = (message) => {
    const index = messages.indexOf(message);
    if (index > -1) {
      let tempMessages = [...messages];
      tempMessages.splice(index, 1);
      setMessages(tempMessages);
    }
  };

  const renderPriorities = () => {
    return PRIORITIES.map((priority) => {
      return (
        <Grid item xs={4} key={priority.cod}>
          <List
            title={priority.title}
            messages={messagesFilteredByPriority(priority.cod)}
            type={priority.type}
            deleteMessage={deleteMessage}
          />
        </Grid>
      );
    });
  };
  return (
    <Grid container justify="center">
      {renderPriorities()}
    </Grid>
  );
};

export default MessageGrid;
